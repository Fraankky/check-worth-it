def build_analyze_prompt(payload: dict, price_stats: dict) -> list[dict]:
    return [
        {
            "role": "system",
            "content": (
                "You are an assistant helping Indonesian marketplace users "
                "decide whether a product is worth buying. "
                "Answer in Bahasa Indonesia. "
                "Always return JSON."
            ),
        },
        {
            "role": "user",
            "content": f"""
            Product:
            {payload["product"]}

            Price History Stats:
            {price_stats}

            Reviews (sample):
            {payload["reviews"][:5]}

             Return JSON with:
             - worthItScore (0-100)
             - summary (in Bahasa Indonesia)
             - pros (array in Bahasa Indonesia)
             - cons (array in Bahasa Indonesia)
             - priceInsight (in Bahasa Indonesia)
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
