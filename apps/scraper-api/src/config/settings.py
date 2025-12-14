from pydantic import BaseModel


class Settings(BaseModel):
    scraper_timeout: int = 10  # seconds
    scraper_user_agent: str = (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0"
    )


settings = Settings()
