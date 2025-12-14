from fastapi import APIRouter, HTTPException
from src.schemas.scraper import ScrapeProductRequest, ScrapeProductResponse
from src.services.scraper_service import scrape_shopee_product, scrape_tokopedia_product

router = APIRouter(prefix="/scraper", tags=["Scraper"])


@router.post("/scrape-product", response_model=ScrapeProductResponse)
async def scrape_product_endpoint(payload: ScrapeProductRequest):
    try:
        # Validate URL is Shopee or Tokopedia
        lower_url = payload.url.lower()
        if "shopee" not in lower_url and "tokopedia" not in lower_url:
            raise HTTPException(
                status_code=400, detail="Only Shopee and Tokopedia URLs are supported"
            )
        if "shopee" in lower_url:
            return scrape_shopee_product(payload.url)
        elif "tokopedia" in lower_url:
            return scrape_tokopedia_product(payload.url)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
