---
trigger: always_on
---

# WORKSPACE RULES: NEXT WEB3 DAPP TEMPLATE

This is a clean, lightweight Next.js (App Router) Web3 dApp template. The primary goal is to maintain a simple, basic, and ready-to-use codebase with minimal files and folders. Do not overcomplicate the initial boilerplate.

The following architectural guidelines and standards (such as Lingui.js and the Modular Context-Based architecture) are highly recommended. They represent a welcomed standard and should be applied when developing and expanding the project further.

## 1. TECH STACK & LIBRARIES

### Core (Installed)
- **Framework:** Next.js 15 (App Router) with React 19.
- **Styling:** Tailwind CSS v4.
- **Web3:** `@rainbow-me/rainbowkit` (v2), `wagmi` (v2), `viem`, and `ethers`.
- **Data Fetching:** `@tanstack/react-query` for API state.
- **State:** `next-themes` and React Context for modular state.

### Recommended (Standard to Implement)
- **UI Components:** `shadcn/ui`, Radix UI primitives, and `framer-motion` for animations.
- **Icons:** `lucide-react` (Avoid inline raw `<svg>`).
- **Translation:** `@lingui/react` (v5+) for internationalization.
- **Forms & Validation:** `react-hook-form` with `zod` schemas.
- **Analytics:** `posthog-js` for tracking.
- **Database:** Server-side queries using `pg` with a connection pool.
- **Custom SVGs:** Use `@svgr/webpack`. Place `.svg` files in `src/assets/icons` and import as React components.

## 2. TRANSLATION & INTERNATIONALIZATION (LINGUI.JS)

We use `@lingui/react` (v5+) and a custom middleware for localized routing (`/[lang]/...`).

- ALL user-facing text must be wrapped in the `<Trans>` component.
- **Correct Import:** ALWAYS use `import { Trans } from '@lingui/react/macro';`.
- **Wrong Import (Prohibited):** Do NOT import from `@lingui/macro` or `@lingui/core` for React components.
- Example: `<h1><Trans>Find Every Car.</Trans></h1>`.

## 3. ARCHITECTURE & FOLDER STRUCTURE (MODULAR CONTEXT-FIRST)

We follow a strict "Modular Context-Based" architecture to prevent Prop Drilling and Redux legacy issues.

- **`src/app/` (Routing):** Contains ONLY routing logic, page definitions, and page-specific components (e.g., `src/app/[lang]/home/components`). Do NOT put heavy business logic here.
- **`src/layout/` & `src/providers/`:** Global UI layout wrappers (e.g., `Footer`) go in `layout`. Global state providers (e.g., `CarProvider`, `PostHogProvider`) go in `providers`.
- **`src/modules/` (The Brain):** Complex features (e.g., SearchDesk, FilterSystem) must live here. Each module should have its own Context to manage Business Logic (API calls, React Query) and Global UI State.
- **`src/components/ui/` (Shadcn):** Contains ONLY unmodified `shadcn/ui` components. DO NOT alter these files.
- **`src/components/global/`:** Our custom, highly reusable global components (e.g., `CurvedLoop.tsx`, `SpotlightCard.tsx`).
- **`src/api/` (Data Layers):**
  - `server/`: Raw SQL queries in `*.queries.ts` (using `src/lib/db.ts`).
  - `services/`: API client services in `*.service.ts` that fetch from Next.js API routes.
  - `hooks/`: TanStack Query hooks organized by feature (e.g., `useCatalog.ts`).
- **Data Fetching:** TanStack Query calls must be isolated in hooks. Hooks should be organized within `src/api/hooks/` for shared data or within modules (`src/modules/[name]/hooks/`) for feature-specific logic.

We follow a strict "Modular Context-Based" architecture.

- **Folder Casing:** Module folders in `src/modules/` MUST be lowercase (e.g., `src/modules/catalog`, NOT `Catalog`).
- **Internal Module Structure:** Prioritize separation of concerns. While the preferred pattern uses a dedicated manager hook, complex modules can implement logic in `Context.tsx` or split it into specialized hooks.
  1. `src/modules/[name]/types.ts`: Contains all Interfaces and Types.
  2. `src/modules/[name]/constants.ts`: Contains default values and configuration.
  3. `src/modules/[name]/hooks/`: Specialized hooks (e.g., `use[Name]Manager.ts` or feature-specific hooks).
  4. `src/modules/[name]/Context.tsx`: The Provider component.

## 4. ENVIRONMENT VARIABLES

- NEVER hallucinate, guess, or invent environment variable names.
- Always check the `.env.example` file to know the exact names of the variables required (e.g., for Supabase or PostHog) before implementing logic that requires them.

## 5. STATE MANAGEMENT DECISION MATRIX

- **Business Logic & Shared State:** Use React Context inside `src/modules/...` (e.g., API calls, complex calculations, data shared across distant components).
- **Local UI State:** Use `useState` directly inside the component for ephemeral UI states (e.g., dropdown open/closed, hover states). Do NOT pollute Context with local UI state.
- **Prop Drilling:** Max 2 levels deep. If data needs to go deeper, the child component MUST consume the Context directly.
- **Persistence:** Use `sessionStorage` for cross-navigation state (e.g., `lastCatalogPath`) to maintain user context between page transitions.

## 6. FILE NAMING & COMPONENT SIZING (NO INDEX HELL)

- **Avoid `index.tsx`:** Name files explicitly (e.g., `src/components/global/CarCard.tsx`).
- **Barrel Files:** Use `index.ts` ONLY for exporting parts of a complex component folder cleanly.

## 7. LINTING & IMPORTS (STRICT)

- **Absolute Paths Only:** Always use the `@/` path alias. Relative paths (`../` o `./`) are STRICTLY PROHIBITED.
- **Import Order:** Follow the exact project order: `react` first, `next/*` second, external packages third, `@/hooks`, `@/components`, and `@/lib` last. Do not use blank lines between imports.
- **No Console Logs:** Do not leave `console.log` in the code. Only `console.warn` or `console.error` are permitted.
- **Tailwind:** Use `cn()` from `@/utils` (or `@/lib/utils`) to merge Tailwind classes.