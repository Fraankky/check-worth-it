#!/usr/bin/env python3
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "src"))

from services.scraper_service import scrape_shopee_product

url = "https://shopee.co.id/ASICS-Women-Novablast-5-Standard-1012B765.601-i.472404366.41110338066?extraParams=%7B%22display_model_id%22%3A243675316037%7D"

try:
    result = scrape_shopee_product(url)
    print(f"Title: {result.title}")
    print(f"Price: {result.price}")
    print(f"Image URL: {result.image_url}")
    print(f"Reviews: {len(result.reviews)}")
except Exception as e:
    print(f"Error: {e}")
