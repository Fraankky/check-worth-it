from fastapi import FastAPI

from src.api.ai.controller import router as ai_router
from src.api.scraper.controller import router as scraper_router

app = FastAPI(title="Smart Marketplace Helper(check worth it) Scraper API")

app.include_router(ai_router)
app.include_router(scraper_router)
