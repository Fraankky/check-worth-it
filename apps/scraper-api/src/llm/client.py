import os
import httpx
import json


async def call_llm_json(messages: list[dict]) -> dict:
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        # Check if this is a comparison request
        prompt_text = messages[-1]["content"] if messages else ""
        if "Bandingkan kedua produk" in prompt_text:
            # Return mock comparison response
            return {
                "comparisonSummary": "Kedua sepatu lari ini memiliki kualitas yang baik dengan rating tinggi, namun berbeda dalam hal harga dan merek.",
                "recommendedProduct": "ASICS Women Novablast 5",
                "priceComparison": "ASICS Novablast 5 lebih murah Rp 1.889.100 dibanding New Balance FuelCell Rebel V5 yang Rp 2.300.000.",
                "reviewComparison": "Keduanya memiliki rating 5 bintang dengan review positif.",
                "overallVerdict": "ASICS Women Novablast 5 adalah pilihan yang lebih worth it karena harganya lebih terjangkau namun tetap memiliki kualitas merek ASICS yang terpercaya, cocok untuk wanita yang mencari sepatu lari dengan performa tinggi namun budget-friendly.",
            }
        else:
            # Return mock single product response
            return {
                "worthItScore": 75,
                "summary": "This ASICS running shoe appears to be a good value based on the price and positive reviews.",
                "pros": [
                    "Good brand reputation",
                    "Positive customer reviews",
                    "Reasonable price",
                ],
                "cons": ["Limited price history available", "Size specific"],
                "priceInsight": "Price seems competitive for an ASICS branded running shoe.",
            }

    async with httpx.AsyncClient(timeout=60) as client:
        res = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {os.getenv('OPENROUTER_API_KEY')}",
                "Content-Type": "application/json",
            },
            json={
                "model": "microsoft/wizardlm-2-8x22b",
                "messages": messages,
                "response_format": {"type": "json_object"},
            },
        )

        if res.status_code != 200:
            raise Exception(f"API error: {res.status_code} - {res.text}")

        data = res.json()
        if "choices" not in data or not data["choices"]:
            raise Exception(f"Invalid API response: {data}")

        content = data["choices"][0]["message"]["content"]
        return json.loads(content)
