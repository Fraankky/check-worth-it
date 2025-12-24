import requests
from bs4 import BeautifulSoup
import json
import re
from ..config.settings import settings
from ..schemas.scraper import ScrapeProductResponse, Review


def _get_default_headers(referer: str) -> dict:
    """Get default headers for HTTP requests."""
    return {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Referer": referer,
    }


def _fetch_page(url: str, referer: str) -> BeautifulSoup:
    """Fetch page content and return parsed BeautifulSoup object."""
    headers = _get_default_headers(referer)
    response = requests.get(url, headers=headers, timeout=settings.scraper_timeout)
    response.raise_for_status()
    
    return BeautifulSoup(response.text, "html.parser")


def _extract_basic_product_data(soup: BeautifulSoup) -> tuple[str, int, str | None]:
    """Extract basic product data from meta tags: title, price, image_url."""
    title_meta = soup.find("meta", {"property": "og:title"})
    if not title_meta:
        raise ValueError("Could not find product title")
    title = title_meta["content"]

    price_meta = soup.find("meta", {"property": "product:price:amount"})
    if not price_meta:
        raise ValueError("Could not find product price")
    try:
        price = int(float(price_meta["content"]))
    except (ValueError, TypeError):
        price = 0

    image_meta = soup.find("meta", {"property": "og:image"})
    image_url = image_meta["content"] if image_meta else None

    return title, price, image_url


def _find_shopee_script(soup: BeautifulSoup) -> BeautifulSoup | None:
    """Find the script tag containing Shopee product data."""
    # Method 1: Try to find window.runParams (legacy)
    script = soup.find("script", string=lambda t: t and "window.runParams" in t)
    if script:
        return script

    # Method 2: Look for script with product data in different formats
    script = soup.find("script", string=lambda t: t and '"item":' in t)
    if script:
        return script

    # Method 3: Look for any script containing product information
    scripts = soup.find_all("script")
    for s in scripts:
        if s.string and ('"name"' in s.string and '"price"' in s.string):
            return s
    return None


def _parse_shopee_json_ld(soup: BeautifulSoup) -> ScrapeProductResponse | None:
    """Parse JSON-LD structured data for Shopee product."""
    json_ld_scripts = soup.find_all("script", {"type": "application/ld+json"})
    for json_ld in json_ld_scripts:
        try:
            ld_data = json.loads(json_ld.string)
            if isinstance(ld_data, list):
                for item in ld_data:
                    if item.get("@type") == "Product":
                        ld_data = item
                        break
            if ld_data.get("@type") == "Product":  # type: ignore
                title = ld_data.get("name", "")  # type: ignore
                offers = ld_data.get("offers", {})  # type: ignore
                if isinstance(offers, list):
                    offers = offers[0] if offers else {}
                price = int(float(offers.get("price", 0)))  # type: ignore
                image_url_raw = ld_data.get("image")  # type: ignore
                if isinstance(image_url_raw, list):
                    image_url = image_url_raw[0] if image_url_raw else None
                else:
                    image_url = (
                        image_url_raw if isinstance(image_url_raw, str) else None
                    )
                return ScrapeProductResponse(
                    title=title,
                    price=price,
                    rating=None,
                    reviews_count=None,
                    reviews=[],
                    image_url=image_url,
                )
        except (json.JSONDecodeError, ValueError):
            continue
    return None


def _parse_shopee_meta_fallback(soup: BeautifulSoup) -> ScrapeProductResponse | None:
    """Parse meta tags as fallback for Shopee."""
    title_meta = soup.find("meta", {"property": "og:title"})
    price_meta = soup.find("meta", {"property": "product:price:amount"})
    image_meta = soup.find("meta", {"property": "og:image"})

    if title_meta and price_meta:
        title = title_meta.get("content", "")
        try:
            price_str = price_meta.get("content", "0")
            price = int(float(price_str))
        except (ValueError, TypeError):
            price = 0
        image_url = image_meta.get("content") if image_meta else None
        return ScrapeProductResponse(
            title=title,
            price=price,
            rating=None,
            reviews_count=None,
            reviews=[],
            image_url=image_url,
        )
    return None


def _parse_shopee_api_fallback(url: str, headers: dict) -> ScrapeProductResponse | None:
    """Try Shopee API as last resort."""
    product_id_match = re.search(r"/product/(\d+)/", url)
    if not product_id_match:
        return None
    product_id = product_id_match.group(1)
    api_url = f"https://shopee.co.id/api/v2/item/get?itemid={product_id}&shopid=1"
    try:
        api_response = requests.get(api_url, headers=headers, timeout=10)
        if api_response.status_code == 200:
            api_data = api_response.json()
            item = api_data.get("item", {})
            title = item.get("name", "")
            price = item.get("price", 0) // 100  # Shopee price in cents
            image_url = item.get("image", "")
            if image_url:
                image_url = f"https://cf.shopee.co.id/file/{image_url}"
            return ScrapeProductResponse(
                title=title,
                price=price,
                rating=None,
                reviews_count=None,
                reviews=[],
                image_url=image_url,
            )
    except (requests.RequestException, ValueError):
        pass
    return None


def _extract_shopee_data_from_script(script: BeautifulSoup) -> dict:
    """Extract JSON data from Shopee script tag."""
    if not script.string:
        raise ValueError("Script has no string content")
    try:
        start = script.string.find("{")
        end = script.string.rfind("}") + 1
        return json.loads(script.string[start:end])
    except (json.JSONDecodeError, AttributeError):
        # Try to find JSON in a different way
        json_match = re.search(r"\{.*\}", script.string)
        if json_match:
            try:
                return json.loads(json_match.group())
            except json.JSONDecodeError:
                pass
    raise ValueError("Could not parse product data from script")


def _extract_shopee_reviews(soup: BeautifulSoup) -> list[Review]:
    """Extract reviews from Shopee page."""
    reviews = []
    review_elements = soup.find_all("div", class_="shopee-product-rating__content")
    for elem in review_elements[:10]:  # Limit to 10
        rating_elem = elem.find_previous("div", class_="shopee-product-rating__rating")
        rating = int(rating_elem.text.strip()) if rating_elem else 5
        content = elem.text.strip()
        reviews.append(Review(rating=rating, content=content))
    return reviews


def _extract_tokopedia_rating_and_count(
    soup: BeautifulSoup,
) -> tuple[float | None, int | None]:
    """Extract rating and review count from Tokopedia page."""
    rating = None
    review_count = None

    # First, try meta tags
    rating_meta = soup.find("meta", attrs={"itemprop": "ratingValue"})
    if rating_meta and rating_meta.get("content"):
        try:
            rating = float(rating_meta["content"])
        except ValueError:
            pass

    review_count_meta = soup.find("meta", attrs={"itemprop": "reviewCount"})
    if review_count_meta and review_count_meta.get("content"):
        try:
            review_count = int(review_count_meta["content"])
        except ValueError:
            pass

    # If not found, try to find in page text (e.g., "5.0 / 5.0")
    if rating is None:
        rating_match = re.search(r"(\d+\.\d+)\s*/\s*5\.0", str(soup))
        if rating_match:
            try:
                rating = float(rating_match.group(1))
            except ValueError:
                pass

    # Look for review count in text (e.g., "48 rating • 25 ulasan")
    if review_count is None:
        count_match = re.search(r"(\d+)\s*rating\s*•\s*(\d+)\s*ulasan", str(soup))
        if count_match:
            try:
                review_count = int(count_match.group(1))
            except ValueError:
                pass

    # If still not found, try script data
    if rating is None or review_count is None:
        scripts = soup.find_all("script")
        for script in scripts:
            if script.string:
                # Look for rating in script
                if '"rating"' in script.string or "ratingValue" in script.string:
                    rating_match = re.search(
                        r'"rating(?:Value)?"\s*:\s*([0-9.]+)', script.string
                    )
                    if rating_match:
                        try:
                            rating = float(rating_match.group(1))
                        except ValueError:
                            pass
                # Look for review count
                if '"reviewCount"' in script.string or "reviewCount" in script.string:
                    count_match = re.search(
                        r'"reviewCount"\s*:\s*([0-9]+)', script.string
                    )
                    if count_match:
                        try:
                            review_count = int(count_match.group(1))
                        except ValueError:
                            pass

    return rating, review_count


def scrape_shopee_product(url: str) -> ScrapeProductResponse:
    """Scrape product data from Shopee."""
    soup = _fetch_page(url, "https://shopee.co.id")

    # Try JSON-LD first
    product_data = _parse_shopee_json_ld(soup)
    if product_data:
        return product_data

    # Try meta tags
    product_data = _parse_shopee_meta_fallback(soup)
    if product_data:
        return product_data

    # Try API fallback
    headers = _get_default_headers("https://shopee.co.id")
    product_data = _parse_shopee_api_fallback(url, headers)
    if product_data:
        return product_data

    # Try script parsing
    script = _find_shopee_script(soup)
    if not script:
        raise ValueError(f"Could not find product data in page. URL: {url}")

    data = _extract_shopee_data_from_script(script)
    item = data.get("item", {})
    title = item.get("name", "")
    price = item.get("price", 0) // 100  # Shopee price in cents

    reviews = _extract_shopee_reviews(soup)
    avg_rating = sum(r.rating for r in reviews) / len(reviews) if reviews else None
    reviews_count = len(reviews)

    image_url = item.get("images", [None])[0]
    if image_url:
        image_url = f"https://cf.shopee.co.id/file/{image_url}"

    return ScrapeProductResponse(
        title=title,
        price=price,
        rating=avg_rating,
        reviews_count=reviews_count,
        reviews=reviews,
        image_url=image_url,
    )


def scrape_tokopedia_product(url: str) -> ScrapeProductResponse:
    """Scrape product data from Tokopedia."""
    soup = _fetch_page(url, "https://www.tokopedia.com")

    title, price, image_url = _extract_basic_product_data(soup)
    rating, review_count = _extract_tokopedia_rating_and_count(soup)

    # Create dummy reviews since content is not available in meta
    reviews = (
        [
            Review(
                rating=int(rating or 5),
                content=f"Rating: {rating or 'N/A'} from {review_count or 0} reviews",
            )
        ]
        if review_count and review_count > 0
        else []
    )

    return ScrapeProductResponse(
        title=title,
        price=price,
        rating=rating,
        reviews_count=review_count,
        reviews=reviews,
        image_url=image_url,
    )
