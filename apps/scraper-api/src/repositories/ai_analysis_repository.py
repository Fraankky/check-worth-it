import select
from typing import Optional
from datetime import datetime, timedelta
from src.models.ai_analysis import AIAnalysis
from db.session import AsyncSession

CACHE_TTL_DAYS = 7

class AIAnalysisRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_cached(
        self,
        product_id: int,
        input_hash: str
    ) -> Optional[AIAnalysis]:

        result = await self.session.execute(
            select(AIAnalysis)
            .where(AIAnalysis.product_id == product_id)
            .where(AIAnalysis.input_hash == input_hash)
            .order_by(AIAnalysis.created_at.desc())
        )

        record = result.scalar_one_or_none()

        if not record:
            return None

        if record.created_at < datetime.utcnow() - timedelta(days=CACHE_TTL_DAYS):
            return None

        return record

    async def save(
        self,
        product_id: int,
        input_hash: str,
        result: dict,
        model_name: str
    ):
        record = AIAnalysis(
            product_id=product_id,
            input_hash=input_hash,
            result=result,
            model_name=model_name
        )
        self.session.add(record)
        await self.session.commit()
