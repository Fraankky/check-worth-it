import requests
from bs4 import BeautifulSoup
import json
import re
from ..config.settings import settings
from ..schemas.scraper import ScrapeProductResponse, Review


def scrape_shopee_product(url: str) -> ScrapeProductResponse:
    headers = {
        "User-Agent": settings.scraper_user_agent,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
    }
    response = requests.get(url, headers=headers, timeout=settings.scraper_timeout)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")

    # Method 1: Try to find window.runParams (legacy)
    script = soup.find("script", string=lambda t: t and "window.runParams" in t)

    # Method 2: Look for script with product data in different formats
    if not script:
        script = soup.find("script", string=lambda t: t and '"item":' in t)

    # Method 3: Look for any script containing product information
    if not script:
        scripts = soup.find_all("script")
        for s in scripts:
            if s.string and ('"name"' in s.string and '"price"' in s.string):
                script = s
                break

    # Method 4: Try JSON-LD structured data
    if not script:
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
                    image_url = ld_data.get("image")  # type: ignore
                    if isinstance(image_url, list):
                        image_url = image_url[0] if image_url else None
                    return ScrapeProductResponse(
                        title=title, price=price, reviews=[], image_url=image_url
                    )
            except:
                continue

    # Method 5: Try meta tags as fallback
    if not script:
        title_meta = soup.find("meta", {"property": "og:title"})
        price_meta = soup.find("meta", {"property": "product:price:amount"})
        image_meta = soup.find("meta", {"property": "og:image"})

        if title_meta and price_meta:
            title = title_meta.get("content", "")  # type: ignore
            try:
                price_str = price_meta.get("content", "0")  # type: ignore
                price = int(float(price_str))
            except:
                price = 0
            image_url = image_meta.get("content") if image_meta else None  # type: ignore

            return ScrapeProductResponse(
                title=title, price=price, reviews=[], image_url=image_url
            )

    if not script:
        # Extract product ID from URL for API call attempt
        product_id_match = re.search(r"/product/(\d+)/", url)
        if product_id_match:
            product_id = product_id_match.group(1)
            # Try Shopee API (this might not work but worth attempting)
            api_url = (
                f"https://shopee.co.id/api/v2/item/get?itemid={product_id}&shopid=1"
            )
            try:
                api_response = requests.get(api_url, headers=headers, timeout=10)
                if api_response.status_code == 200:
                    api_data = api_response.json()
                    item = api_data.get("item", {})
                    title = item.get("name", "")
                    price = item.get("price", 0) // 100
                    image_url = item.get("image", "")
                    if image_url:
                        image_url = f"https://cf.shopee.co.id/file/{image_url}"
                    return ScrapeProductResponse(
                        title=title, price=price, reviews=[], image_url=image_url
                    )
            except:
                pass

        raise ValueError(f"Could not find product data in page. URL: {url}")

    # Extract JSON from script
    try:
        start = script.string.find("{")
        end = script.string.rfind("}") + 1
        data = json.loads(script.string[start:end])
    except:
        # Try to find JSON in a different way
        json_match = re.search(r"\{.*\}", script.string)
        if json_match:
            try:
                data = json.loads(json_match.group())
            except:
                raise ValueError(f"Could not parse product data from page. URL: {url}")
        else:
            raise ValueError(f"Could not parse product data from page. URL: {url}")

    # Parse data
    item = data.get("item", {})
    title = item.get("name", "")
    price = item.get("price", 0) // 100  # Shopee price in cents

    # For reviews, basic parsing from page (limited)
    reviews = []
    review_elements = soup.find_all("div", class_="shopee-product-rating__content")
    for elem in review_elements[:10]:  # Limit to 10
        rating_elem = elem.find_previous("div", class_="shopee-product-rating__rating")
        rating = int(rating_elem.text.strip()) if rating_elem else 5
        content = elem.text.strip()
        reviews.append(Review(rating=rating, content=content))

    image_url = item.get("images", [None])[0]
    if image_url:
        image_url = f"https://cf.shopee.co.id/file/{image_url}"

    return ScrapeProductResponse(
        title=title, price=price, reviews=reviews, image_url=image_url
    )


def scrape_tokopedia_product(url: str) -> ScrapeProductResponse:
    headers = {
        "User-Agent": settings.scraper_user_agent,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
    }
    response = requests.get(url, headers=headers, timeout=settings.scraper_timeout)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")

    # Tokopedia product data from meta tags
    title_meta = soup.find("meta", property="og:title")
    if not title_meta:
        raise ValueError("Could not find product title")
    title = title_meta["content"]

    price_meta = soup.find("meta", property="product:price:amount")
    if not price_meta:
        raise ValueError("Could not find product price")
    price = int(price_meta["content"])

    image_meta = soup.find("meta", property="og:image")
    image_url = image_meta["content"] if image_meta else None

    # For reviews, basic parsing from meta
    rating_meta = soup.find("meta", attrs={"itemprop": "ratingValue"})
    rating = float(rating_meta["content"]) if rating_meta else 5.0

    review_count_meta = soup.find("meta", attrs={"itemprop": "reviewCount"})
    review_count = int(review_count_meta["content"]) if review_count_meta else 0

    # Since reviews content is not in meta, we'll create a dummy review with rating
    reviews = (
        [
            Review(
                rating=int(rating),
                content=f"Rating: {rating} from {review_count} reviews",
            )
        ]
        if review_count > 0
        else []
    )

    return ScrapeProductResponse(
        title=title, price=price, reviews=reviews, image_url=image_url
    )
