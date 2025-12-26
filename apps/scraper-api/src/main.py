from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api.ai.controller import router as ai_router
from .api.scraper.controller import router as scraper_router

app = FastAPI(title="Smart Marketplace Helper(check worth it) Scraper API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Development
        "https://*.pages.dev",     # Cloudflare Pages
        "https://yourdomain.com"   # Custom domain (nanti)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_router)
app.include_router(scraper_router)
