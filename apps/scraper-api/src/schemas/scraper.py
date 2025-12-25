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
    rating: Optional[float] = None
    reviews_count: Optional[int] = None
    reviews: List[Review]
    image_url: Optional[str] = None
