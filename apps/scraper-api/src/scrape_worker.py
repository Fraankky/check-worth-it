
"""
Scrape Worker Script
Runs periodic scraping of products from Shopee.
"""

import sys
import os

sys.path.append(os.path.dirname(__file__))

from services.scraper_service import scrape_shopee_product
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Sample URLs to scrape (in a real setup, this could come from DB or config)
SAMPLE_URLS = [
    "https://shopee.co.id/product/123456789/sample-product",  # Replace with real URLs
]


def run_scraping():
    for url in SAMPLE_URLS:
        try:
            logger.info(f"Scraping {url}")
            result = scrape_shopee_product(url)
            logger.info(f"Scraped data: {result}")
            # In a real setup, save to DB or send to API
        except Exception as e:
            logger.error(f"Failed to scrape {url}: {e}")


if __name__ == "__main__":
    run_scraping()
