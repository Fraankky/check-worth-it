# Agent Guidelines for check-worthit

## Build/Lint/Test Commands
- **Web app dev**: `pnpm dev:web` (Next.js on port 3000)
- **Scraper API dev**: `pnpm dev:scraper-api` (FastAPI on port 8000)
- **Database migrate**: `pnpm dev:db:migrate`
- **Database generate**: `pnpm dev:db:generate`
- **Lint**: `cd apps/web && npx eslint .` (ESLint with Next.js config)
- **Type check**: `cd apps/web && npx tsc --noEmit` (TypeScript strict mode)
- **Single test**: No test framework configured yet

## Code Style Guidelines
- **Language**: TypeScript with strict mode enabled
- **Framework**: Next.js 16 with React 19, App Router
- **Imports**: Use absolute imports with `@/` alias for src/, workspace imports for packages
- **Formatting**: Follow ESLint/Prettier conventions (no custom config found)
- **Types**: Strict typing required, use explicit types for function parameters
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Error handling**: Use try/catch for async operations, return NextResponse for API routes
- **Database**: Prisma ORM with PostgreSQL, use generated types
- **Components**: Functional components with TypeScript interfaces
- **Styling**: Tailwind CSS with dark mode support

## Project Structure
- Monorepo with pnpm workspaces
- `apps/web/`: Next.js frontend
- `apps/scraper-api/`: FastAPI backend
- `packages/db/`: Shared Prisma database package

## Environment
- Use pnpm (not npm/yarn)
- PostgreSQL database
- Docker Compose for local development</content>
<parameter name="filePath">/home/faris/projects/check-worthit/AGENTS.md