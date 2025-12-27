from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import sys
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Add src to path for imports
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "src"))

app = FastAPI(title="Smart Marketplace Helper(check worth it) Scraper API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Development
        "https://*.pages.dev",  # Cloudflare Pages
        "https://yourdomain.com",  # Custom domain (nanti)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import and include routers
try:
    from api.ai.controller import router as ai_router
    from api.scraper.controller import router as scraper_router

    app.include_router(ai_router)
    app.include_router(scraper_router)
except ImportError as e:
    print(f"Warning: Could not import routers: {e}")


# Add health check endpoint
@app.get("/")
async def root():
    return {
        "message": "Check Worth It Scraper API",
        "status": "running",
        "environment": os.getenv("RAILWAY_ENVIRONMENT", "development"),
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn

    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
