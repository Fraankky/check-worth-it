def build_analyze_prompt(payload: dict, price_stats: dict) -> list[dict]:
    return [
        {
            "role": "system",
            "content": (
                "You are an AI assistant that analyzes products from Indonesian marketplaces "
                "to determine if they are worth buying. Analyze the product data and provide "
                "a worth-it score from 0-100, where 100 means definitely worth it and 0 means not worth it. "
                "Consider price history, ratings, reviews, and market value. "
                "Always return valid JSON only, no additional text."
            ),
        },
        {
            "role": "user",
            "content": f"""
Analyze this product and determine if it's worth buying:

Product Information:
{payload["product"]}

Price History Statistics:
{price_stats}

Sample Reviews:
{payload["reviews"][:5]}

Return a JSON object with exactly these fields:
- worthItScore: integer 0-100
- summary: string summary in Indonesian
- pros: array of strings in Indonesian
- cons: array of strings in Indonesian
- priceInsight: string analysis in Indonesian
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
