from utils.price_stats import compute_price_stats

def test_compute_price_stats_basic():
    price_history = [
        {"price": 10000},
        {"price": 12000},
        {"price": 11000},
    ]

    result = compute_price_stats(price_history)

    assert result["min"] == 10000
    assert result["max"] == 12000
    assert result["avg"] == 11000
    assert result["current"] == 11000
    assert result["trend"] == "UP"
