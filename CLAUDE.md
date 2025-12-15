# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Bttr is a digital product agency website built on a monorepo architecture consisting of:

- **Backend**: Python/FastAPI API server with PostgreSQL, Redis, and S3 storage
- **Frontend**: Next.js web application with TypeScript
- **Workers**: Dramatiq background job processors

## Commands

### Frontend Development

```bash
cd clients

# Install dependencies (requires pnpm)
pnpm install

# Start development server (http://127.0.0.1:3000)
pnpm dev

# Build production bundle
pnpm build

# Run linting
pnpm lint

# Type checking
cd apps/web && pnpm typecheck
```

### Backend Development

```bash
cd server

# Install dependencies (requires uv)
uv sync

# Start API server (http://127.0.0.1:8000)
uv run task api

# Start background worker
uv run task worker

# Run tests
uv run task test

# Linting and formatting
uv run task lint
```

### Docker Services (Backend)

```bash
cd server
docker compose up -d  # Start PostgreSQL, Redis, Minio
```

## Architecture

### Frontend Structure

- **`clients/apps/web/`**: Main Next.js website
    - `src/app/(main)/(website)/(landing)/`: Landing pages
    - `src/components/Landing/`: Landing page components
    - `src/components/Brand/`: Branding components (BttrLogotype, etc.)
- **`clients/packages/`**: Shared packages
    - `ui/`: React components (Radix UI + Tailwind)

### Key Landing Pages

- `/` - Homepage
- `/features/products` - Design & Strategy
- `/features/benefits` - Engineering
- `/features/customers` - Security & Compliance
- `/features/analytics` - Case Studies
- `/features/finance` - Engagement Models
- `/features/usage-billing` - Our Process
- `/resources/why` - Why Bttr
- `/resources/pricing` - Pricing
- `/resources/merchant-of-record` - Lifecycle Ownership

## Development Guidelines

### General

- Keep comments to the minimum, code should be self-explanatory.
- Use the brand color #D2A62C for Bttr accents
- The `dark:polar-*` classes are part of the design system, not content to rebrand

### Frontend

- Use TanStack Query for data fetching
- State management with Zustand
- UI components from shared `@polar-sh/ui` package
- Follow Next.js App Router conventions
- Tailwind CSS for styling

## Branding

- Primary Brand Color: #D2A62C
- Domain: makebttr.com
- Tagline: "Designed to Adapt. Engineered to Win."
