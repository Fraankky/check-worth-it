def build_analyze_prompt(payload: dict, price_stats: dict) -> list[dict]:
    schema = {
        "decision": "BUY_NOW | WAIT | NOT_RECOMMENDED",
        "confidenceLevel": "HIGH | MEDIUM | LOW",
        "worthItScore": 0 - 100,
        "summary": {"oneLineVerdict": "", "targetUser": ""},
        "reasonsToBuy": [],
        "reasonsToWait": [],
        "risks": [],
        "priceInsight": {
            "currentPricePosition": "CHEAP | FAIR | EXPENSIVE",
            "explanation": "",
        },
        "reviewInsight": {
            "reviewReliability": "HIGH | MEDIUM | LOW",
            "explanation": "",
        },
        "recommendation": {"action": "", "rationale": ""},
    }

    return [
        {
            "role": "system",
            "content": (
                "You are an objective shopping decision assistant. Your task is NOT to summarize the product, "
                "but to help the user decide whether to buy, wait, or skip. You must use the provided price "
                "statistics and review signals, highlight uncertainty and risks, avoid promotional language, "
                "and base all reasoning on data. Always return valid JSON only, no additional text."
            ),
        },
        {
            "role": "user",
            "content": f"""
Analyze this product and provide a clear decision recommendation:

Product data:
{payload["product"]}

Price analysis:
- Current price: {price_stats.get("current", "N/A")}
- Historical average: {price_stats.get("avg", "N/A")}
- Price position: {price_stats.get("pricePosition", "UNKNOWN")} ({price_stats.get("deltaPercent", 0)}% from average)

Review analysis:
- Reliability: {price_stats.get("reviewReliability", "LOW")} (confidence: {price_stats.get("confidenceScore", 0)}%)
- Total reviews: {price_stats.get("totalReviews", 0)}
- Average review length: {price_stats.get("avgLength", 0)} characters
- Repetitive ratio: {price_stats.get("repetitiveRatio", 0)}

Sample reviews:
{payload["reviews"][:3] if payload.get("reviews") else "No reviews"}

Decision rules:
- If price position is EXPENSIVE, prefer WAIT
- If review reliability is LOW, reduce confidence
- If price is CHEAP and reviews are reliable, allow BUY_NOW

Return STRICT JSON following this schema:
{str(schema).replace("'", '"')}
            """,
        },
    ]


def build_compare_prompt(
    product1: dict, product2: dict, stats1: dict, stats2: dict
) -> list[dict]:
    return [
        {
            "role": "system",
            "content": (
                "You are an assistant helping Indonesian marketplace users "
                "compare two products and decide which is better value. "
                "Answer in Bahasa Indonesia. "
                "Always return JSON."
            ),
        },
        {
            "role": "user",
            "content": f"""
            Product 1:
            {product1["product"]}
            Price History Stats: {stats1}
            Reviews: {product1["reviews"][:3]}

            Product 2:
            {product2["product"]}
            Price History Stats: {stats2}
            Reviews: {product2["reviews"][:3]}

             Bandingkan kedua produk ini dan berikan (jawab dalam Bahasa Indonesia):
             - comparisonSummary: Ringkasan perbandingan
             - recommendedProduct: Nama produk yang lebih direkomendasikan
             - priceComparison: Perbandingan harga
             - reviewComparison: Perbandingan review
             - overallVerdict: Kesimpulan akhir dalam 1 paragraf
            """,
        },
    ]
