import pytest
from unittest.mock import patch

from services.ai_analysis_service import analyze_product
from schemas.ai import (
    AnalyzeProductRequest,
    ProductForAI,
    PriceSnapshotForAI,
    ReviewForAI
)
