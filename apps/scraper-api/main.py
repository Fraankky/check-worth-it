from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Smart Marketplace Helper Scraper API")


class ScrapeRequest(BaseModel):
    url: str


class ScrapeResponse(BaseModel):
    name: str
    price: int
    rating: float | None = None
    reviews_count: int | None = None
    shop_name: str | None = None
    shop_location: str | None = None
    marketplace: str


@app.get("/health")
def health():
    return {"status": "ok", "service": "scraper-api"}


@app.post("/scrape/product", response_model=ScrapeResponse)
async def scrape_product(req: ScrapeRequest):
    
    # logic scraper
    
    return ScrapeResponse(
        name="Dummy Product from " + req.url,
        price=123456,
        rating=4.5,
        reviews_count=100,
        shop_name="Dummy Shop",
        shop_location="Jakarta",
        marketplace="SHOPEE",
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
