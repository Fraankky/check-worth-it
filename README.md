AI-powered marketplace price tracking and product decision assistant.

check-worth-it helps users track product prices across marketplaces, stores historical price data, and provides AI-driven recommendations on whether a product is "worth it" to buy based on trends, promotions, and historical context.

---

## Table of Contents

- [Main features](#main-features)
- [Technologies used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Quick installation](#quick-installation)
- [Environment variables](#environment-variables)
- [Development & common commands](#development--common-commands)
- [Project structure](#project-structure)
- [Usage examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

---

## Main features

- Marketplace scraping for price and product metadata
- Historical price storage and retrieval
- Visualizations (frontend) for price trends and history
- Watchlists and alerts on price changes or thresholds
- AI decision assistant that analyzes price history and context to recommend buy/wait actions
- Webhooks and integrations for notifications
- Multi-component monorepo: frontend, scraper API, shared DB layer

---

## Technologies used

- Python (primary language; FastAPI for scraping API and backend components)
- Cython (used where performance optimizations required)
- JavaScript / TypeScript (frontend — Next.js 16 recommended)
- PostgreSQL (database)
- Prisma (shared DB package / schema and client)
- Tailwind CSS (frontend styling)
- Playwright / headless Chromium (optional, for JS-heavy scraping)
- Redis / background workers (optional for job queues)
- Docker & docker-compose (local development / services orchestration)

---

## Prerequisites

- Node.js (LTS) and pnpm
- Python 3.10+
- PostgreSQL (local or via Docker)
- Docker & docker-compose (recommended for local development)
- Optional: Redis, proxy pool, or other background infrastructure

---

## Quick installation

1. Clone the repository
   ```bash
   git clone https://github.com/Fraankky/check-worth-it.git
   cd check-worth-it
   ```

2. Install JS dependencies (workspace)
   ```bash
   pnpm install
   ```

3. Setup Python environment for scraper API
   ```bash
   cd apps/scraper-api
   python -m venv .venv
   source .venv/bin/activate   # Windows: .venv\Scripts\activate
   pip install -r requirements.txt
   cd ../..
   ```

4. Prepare database
   - Start a Postgres instance (local or via Docker Compose)
   - Export your DATABASE_URL, for example:
     ```bash
     export DATABASE_URL=postgresql://postgres:postgres@localhost:5432/checkworthit
     ```

5. Generate and migrate Prisma client
   ```bash
   pnpm dev:db:generate
   pnpm dev:db:migrate
   ```

6. Start development servers
   - Frontend (Next.js):
     ```bash
     pnpm dev:web
     # Next.js runs at http://localhost:3000
     ```
   - Scraper API (FastAPI):
     ```bash
     pnpm dev:scraper-api
     # FastAPI runs at http://localhost:8000
     ```

---

## Environment variables

Create `.env` files for the services you run. Example variables:

Common:
```
DATABASE_URL=postgresql://postgres:postgres@db:5432/checkworthit
LOG_LEVEL=info
```

Frontend (apps/web):
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_URL=http://localhost:3000  # if using NextAuth
```

Scraper/API (apps/scraper-api):
```
DATABASE_URL=postgresql://postgres:postgres@db:5432/checkworthit
PROXY_POOL_URL=http://localhost:6000
SCRAPER_USER_AGENTS="Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
AI_PROVIDER=openai
OPENAI_API_KEY=sk-...
```

Store production secrets in a secure secrets manager; do not commit them to the repository.

---

## Development & common commands

- Start web frontend (Next.js): `pnpm dev:web`
- Start scraper API (FastAPI): `pnpm dev:scraper-api`
- Generate Prisma client: `pnpm dev:db:generate`
- Run database migrations: `pnpm dev:db:migrate`
- Lint frontend: `cd apps/web && npx eslint .`
- Type check frontend: `cd apps/web && npx tsc --noEmit`

Notes:
- Use `pnpm -w` for workspace-wide operations when appropriate.
- Background workers (scraping scheduler, AI tasks, certificate jobs) should be run separately — check `apps/scraper-api` or project scripts for specific commands.

---

## Project structure

(High-level overview; actual tree may vary)

- apps/
  - web/                — Next.js frontend (TypeScript, Tailwind)
  - scraper-api/        — FastAPI service for scraping & API
- packages/
  - db/                 — Prisma schema, migrations, and generated client
- docker-compose.yml    — local dev orchestration (Postgres, Redis, etc.)
- README.md
- AGENTS.md             — project agent instructions & notes

Key components:
- Scraper modules: marketplace-specific parsers & headless browser helpers
- Database models: Product, PriceHistory, Marketplace, Watchlist, DecisionRequest
- AI assistant: prompt builder, caching, provider integration (OpenAI / self-hosted)
- Frontend pages: product lists, product detail, watchlist, assistant panel

---

## Usage examples

Query product list (example HTTP API usage):
```bash
curl -X GET "http://localhost:8000/api/products" -H "Accept: application/json"
```

Enqueue a product URL for scraping:
```bash
curl -X POST "http://localhost:8000/api/scrape/url" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://marketplace.example/product/12345"}'
```

Request an AI decision for a product:
```bash
curl -X POST "http://localhost:8000/api/assistant/analyze" \
  -H "Content-Type: application/json" \
  -d '{"product_id":"<uuid>", "user_context": {"target_price": 100}}'
```

Note: Replace endpoints and payloads with the actual API shapes defined in the repository. Use the frontend UI for interactive exploration.

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```
   git checkout -b feat/my-feature
   ```
3. Implement your changes. Follow the code style and project guidelines:
   - TypeScript: strict typing for the frontend.
   - Python: follow project linting and formatting rules (e.g., black, flake8 if configured).
4. Run linting and type checks before committing:
   - `cd apps/web && npx eslint .`
   - `cd apps/web && npx tsc --noEmit`
   - Ensure Python code passes format/lint config.
5. Open a pull request describing the change and any migration steps.
6. Add tests and update documentation where applicable.

If you plan database schema changes, include migration files and instructions. For significant changes, create an issue first to discuss the design.

