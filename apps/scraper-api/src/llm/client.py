import os
import httpx
import json
import re


async def call_llm_json(messages: list[dict]) -> dict:
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        # Check if this is a comparison request
        prompt_text = messages[-1]["content"] if messages else ""
        if "Bandingkan kedua produk" in prompt_text:
            # Extract product names from prompt
            name_matches = re.findall(r"'name':\s*'([^']+)'", prompt_text)
            product1_name = name_matches[0] if len(name_matches) > 0 else "Produk 1"
            product2_name = name_matches[1] if len(name_matches) > 1 else "Produk 2"

            # Return mock comparison response
            return {
                "comparisonSummary": f"Kedua produk ini ({product1_name} dan {product2_name}) memiliki kualitas yang baik dengan rating tinggi, namun berbeda dalam hal harga dan merek.",
                "recommendedProduct": product1_name,
                "priceComparison": f"{product1_name} memiliki harga yang kompetitif dibanding {product2_name}.",
                "reviewComparison": "Keduanya memiliki rating tinggi dengan ulasan positif.",
                "overallVerdict": f"{product1_name} adalah pilihan yang lebih worth it karena harganya lebih terjangkau namun tetap memiliki kualitas yang baik.",
            }
        else:
            # Extract product name from prompt
            name_match = re.search(r"'name':\s*'([^']+)'", prompt_text)
            product_name = name_match.group(1) if name_match else "Produk Ini"

            # Return mock single product response
            return {
                "worthItScore": 75,
                "summary": f"{product_name} tampaknya merupakan nilai yang baik berdasarkan harga dan ulasan positif.",
                "pros": [
                    "Reputasi merek yang baik",
                    "Ulasan pelanggan positif",
                    "Harga yang wajar",
                ],
                "cons": ["Riwayat harga terbatas tersedia", "Spesifik ukuran"],
                "priceInsight": f"Harga tampaknya kompetitif untuk produk {product_name}.",
            }

    async with httpx.AsyncClient(timeout=60) as client:
        model = os.getenv("LLM_MODEL", "microsoft/wizardlm-2-8x22b")
        # Handle shorthand model names
        if model == "deepseek-r1t2-chimera:free":
            model = "tngtech/deepseek-r1t2-chimera:free"
        request_json = {
            "model": model,
            "messages": messages,
        }
        # Add response_format only if supported (skip for DeepSeek-like models)
        if "deepseek" not in model.lower():
            request_json["response_format"] = {"type": "json_object"}

        res = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {os.getenv('OPENROUTER_API_KEY')}",
                "Content-Type": "application/json",
            },
            json=request_json,
        )

        if res.status_code != 200:
            raise Exception(f"API error: {res.status_code} - {res.text}")

        data = res.json()
        if "choices" not in data or not data["choices"]:
            raise Exception(f"Invalid API response: {data}")

        content = data["choices"][0]["message"]["content"]

        # Extract JSON from content (handle models that include reasoning or markdown)
        # Find the last JSON object in the content
        json_matches = re.findall(r"\{[^{}]*\}", content)
        if json_matches:
            content = json_matches[-1]  # Take the last match to avoid partial
        else:
            # Fallback to broader search
            json_match = re.search(r"\{[\s\S]*\}", content)
            if json_match:
                content = json_match.group(0)

        return json.loads(content)
