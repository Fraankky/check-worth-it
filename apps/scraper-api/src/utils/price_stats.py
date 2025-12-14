from statistics import mean

def compute_price_stats(price_history: list[dict]) -> dict:
    prices = [p["price"] for p in price_history]

    return {
        "min": min(prices),
        "max": max(prices),
        "avg": int(mean(prices)),
        "current": prices[-1],
        "trend": "UP" if prices[-1] > prices[0] else "DOWN"
    }
