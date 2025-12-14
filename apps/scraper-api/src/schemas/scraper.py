from pydantic import BaseModel
from typing import List, Optional


class ScrapeProductRequest(BaseModel):
    url: str


class Review(BaseModel):
    rating: int
    content: str


class ScrapeProductResponse(BaseModel):
    title: str
    price: int
    reviews: List[Review]
    image_url: Optional[str] = None
