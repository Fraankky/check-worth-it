from ..schemas.ai import (
    AnalyzeProductRequest,
    AnalyzeProductResponse,
    CompareProductsRequest,
    CompareProductsResponse,
)
from ..utils.price_stats import compute_price_stats, compute_review_confidence
from ..llm.prompt_builder import build_analyze_prompt, build_compare_prompt
from ..llm.client import call_llm_json


async def analyze_product(payload: AnalyzeProductRequest) -> AnalyzeProductResponse:
    price_stats = compute_price_stats([p.dict() for p in payload.priceHistory])
    review_stats = compute_review_confidence([r.dict() for r in payload.reviews])

    # Combine stats for AI
    enhanced_stats = {**price_stats, **review_stats}

    # Call AI directly (caching disabled for now)
    messages = build_analyze_prompt(payload.dict(), enhanced_stats)

    ai_result = await call_llm_json(messages)

    return AnalyzeProductResponse(**ai_result, modelName="openrouter")


async def compare_products(payload: CompareProductsRequest) -> CompareProductsResponse:
    if len(payload.products) != 2:
        raise ValueError("Comparison requires exactly 2 products")

    # Get price stats for both products
    product1_stats = compute_price_stats(
        [p.dict() for p in payload.products[0].priceHistory]
    )
    product2_stats = compute_price_stats(
        [p.dict() for p in payload.products[1].priceHistory]
    )

    # Build comparison prompt
    messages = build_compare_prompt(
        payload.products[0].dict(),
        payload.products[1].dict(),
        product1_stats,
        product2_stats,
    )

    ai_result = await call_llm_json(messages)

    return CompareProductsResponse(**ai_result, modelName="openrouter")
