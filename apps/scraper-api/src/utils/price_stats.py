from statistics import mean


def compute_price_stats(price_history: list[dict]) -> dict:
    if not price_history:
        return {
            "min": 0,
            "max": 0,
            "avg": 0,
            "current": 0,
            "trend": "UNKNOWN",
            "pricePosition": "UNKNOWN",
            "deltaPercent": 0,
        }

    prices = [p["price"] for p in price_history]
    min_price = min(prices)
    max_price = max(prices)
    avg_price = int(mean(prices))
    current_price = prices[-1]

    # Price Fairness Index
    if avg_price == 0:
        price_delta = 0
    else:
        price_delta = (current_price - avg_price) / avg_price

    delta_percent = round(price_delta * 100, 1)

    if price_delta > 0.15:
        price_position = "EXPENSIVE"
    elif -0.05 <= price_delta <= 0.05:
        price_position = "FAIR"
    elif price_delta < -0.10:
        price_position = "CHEAP"
    else:
        price_position = "FAIR"  # default

    return {
        "min": min_price,
        "max": max_price,
        "avg": avg_price,
        "current": current_price,
        "trend": "UP" if current_price > prices[0] else "DOWN",
        "pricePosition": price_position,
        "deltaPercent": delta_percent,
    }


def compute_review_confidence(reviews: list[dict]) -> dict:
    if not reviews:
        return {
            "reviewReliability": "LOW",
            "confidenceScore": 0,
            "totalReviews": 0,
            "avgLength": 0,
            "repetitiveRatio": 0,
        }

    total_reviews = len(reviews)
    avg_length = mean([len(r.get("content", "")) for r in reviews]) if reviews else 0

    # Simple repetitive check (count unique contents)
    contents = [r.get("content", "") for r in reviews]
    unique_contents = len(set(contents))
    repetitive_ratio = 1 - (unique_contents / total_reviews) if total_reviews > 0 else 0

    confidence = 100

    if total_reviews < 20:
        confidence -= 30
    if avg_length < 10:
        confidence -= 20
    if repetitive_ratio > 0.4:
        confidence -= 25

    confidence = max(0, min(100, confidence))

    if confidence >= 70:
        reliability = "HIGH"
    elif confidence >= 40:
        reliability = "MEDIUM"
    else:
        reliability = "LOW"

    return {
        "reviewReliability": reliability,
        "confidenceScore": confidence,
        "totalReviews": total_reviews,
        "avgLength": round(avg_length, 1),
        "repetitiveRatio": round(repetitive_ratio, 2),
    }
