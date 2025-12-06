from fastapi import FastAPI

app = FastAPI(title="Check Worth It Scraper API")


@app.get("/")
async def root():
    return {"message": "Check Worth It Scraper API"}


@app.get("/health")
async def health():
    return {"status": "ok"}
