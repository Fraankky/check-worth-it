from pydantic import BaseModel, Field
from typing import List, Optional, Literal

Marketplace = Literal["SHOPEE", "TOKOPEDIA"]


class ProductForAI(BaseModel):
    id: int
    name: str
    marketplace: Marketplace


class PriceSnapshotForAI(BaseModel):
    date: str
    price: int


class ReviewForAI(BaseModel):
    rating: int
    content: str


class AnalyzeProductRequest(BaseModel):
    product: ProductForAI
    priceHistory: List[PriceSnapshotForAI]
    reviews: List[ReviewForAI]


class AnalyzeProductResponse(BaseModel):
    worthItScore: int = Field(..., ge=0, le=100)
    summary: str
    pros: List[str]
    cons: List[str]
    priceInsight: Optional[str]
    modelName: str


class CompareProductsRequest(BaseModel):
    products: List[AnalyzeProductRequest]


class CompareProductsResponse(BaseModel):
    comparisonSummary: str
    recommendedProduct: str
    priceComparison: str
    reviewComparison: str
    overallVerdict: str
    modelName: str
