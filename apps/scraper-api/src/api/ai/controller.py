from fastapi import APIRouter, HTTPException
from schemas.ai import (
    AnalyzeProductRequest,
    AnalyzeProductResponse,
    CompareProductsRequest,
    CompareProductsResponse,
)
from services.ai_analysis_service import analyze_product, compare_products

router = APIRouter(prefix="/ai", tags=["AI"])


@router.post("/analyze", response_model=AnalyzeProductResponse)
async def analyze_product_endpoint(payload: AnalyzeProductRequest):
    try:
        return await analyze_product(payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/compare", response_model=CompareProductsResponse)
async def compare_products_endpoint(payload: CompareProductsRequest):
    try:
        return await compare_products(payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
