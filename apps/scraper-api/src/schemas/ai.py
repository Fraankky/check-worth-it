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


class SummaryData(BaseModel):
    oneLineVerdict: str
    targetUser: str


class PriceInsightData(BaseModel):
    currentPricePosition: Literal["CHEAP", "FAIR", "EXPENSIVE"]
    explanation: str


class ReviewInsightData(BaseModel):
    reviewReliability: Literal["HIGH", "MEDIUM", "LOW"]
    explanation: str


class RecommendationData(BaseModel):
    action: str
    rationale: str


class AnalyzeProductResponse(BaseModel):
    decision: Literal["BUY_NOW", "WAIT", "NOT_RECOMMENDED"]
    confidenceLevel: Literal["HIGH", "MEDIUM", "LOW"]
    worthItScore: int = Field(..., ge=0, le=100)
    summary: SummaryData
    reasonsToBuy: List[str]
    reasonsToWait: List[str]
    risks: List[str]
    priceInsight: PriceInsightData
    reviewInsight: ReviewInsightData
    recommendation: RecommendationData
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
