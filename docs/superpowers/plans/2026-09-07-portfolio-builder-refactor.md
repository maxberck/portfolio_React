# Portfolio Builder Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the portfolio into focused React pages/components and extend the owner Builder to prepare every portfolio JSON dataset without accounts or a backend.

**Architecture:** Keep React + TypeScript + Vite and the existing lightweight History API router. Move page/layout/project UI out of `App.tsx`, centralize Builder persistence/export logic in a hook, and keep repository JSON as the source of truth; the browser only creates downloadable JSON for the owner to commit back to the repository.

**Tech Stack:** React 19, TypeScript, Vite, existing CSS/Tailwind setup, browser History API, localStorage, Blob downloads.

**Spec:** `PRODUCT.md`, `ARCHITECTURE.md`, `ACCEPTANCE.md`, `AGENTS.md`

## Global Constraints

- React + TypeScript + Vite only.
- 100% frontend; no Laravel, PHP, API, database, or visitor accounts.
- Portfolio content is sourced from typed JSON files under `src/data/`.
- Builder persistence is local browser state; it cannot directly rewrite repository files.
- Builder must support profile, skills, projects, experiences, certifications, and testimonials.
- Responsive, accessible, dark/light, and reduced-motion behavior must remain supported.
- Do not add a dependency when browser APIs and existing project code are sufficient.

---

### Task 1: Extract application routing and shared layout

**Files:**
- Create: `src/hooks/useRouter.ts`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- `useRouter()` returns `{ path, navigate }`.
- `Header` consumes the current path and theme state callbacks.
- `Footer` consumes `Profile` data.

- [ ] Move History API navigation and `popstate` subscription into `useRouter`.
- [ ] Move header navigation/theme toggle into `Header`.
- [ ] Move footer/social link into `Footer`.
- [ ] Reduce `App.tsx` to route selection plus shared layout.

### Task 2: Extract visitor pages and project components

**Files:**
- Create: `src/components/projects/ProjectCard.tsx`
- Create: `src/pages/Home.tsx`
- Create: `src/pages/About.tsx`
- Create: `src/pages/Projects.tsx`
- Create: `src/pages/ProjectDetails.tsx`
- Create: `src/pages/Contact.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- `ProjectCard` consumes `Project` and `onOpen`.
- `Projects` owns technology filter and year sort state.
- `ProjectDetails` consumes a project id.

- [ ] Preserve existing routes and visual language.
- [ ] Add newest/oldest year sorting to Projects.
- [ ] Show CV action and profile photo fallback where useful.
- [ ] Render testimonials when JSON contains entries.
- [ ] Keep missing project/profile images from breaking the layout.

### Task 3: Build reusable Builder state and JSON export

**Files:**
- Create: `src/hooks/usePortfolioBuilder.ts`
- Create: `src/components/builder/BuilderQuestion.tsx`
- Create: `src/components/builder/BuilderPreview.tsx`
- Create: `src/pages/Builder.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- `usePortfolioBuilder()` exposes selected entity, step, answers, progress, generated JSON, `setEntity`, `setAnswer`, `next`, `previous`, `reset`, `copyJson`, and `downloadJson`.
- Builder entities are `profile | skill | project | experience | certification | testimonial`.

- [ ] Define question sets and typed initial answers for all six entities.
- [ ] Persist entity/step/answers in localStorage under one namespaced key.
- [ ] Derive next answers before advancing to avoid stale React state.
- [ ] Validate required fields before advancing.
- [ ] Generate JSON matching existing `src/data/*.json` wrapper shapes.
- [ ] Add copy and browser download using `Blob` and `URL.createObjectURL`.
- [ ] Explain that exported JSON must replace the corresponding repository data file.

### Task 4: Clean App styling and verification hooks

**Files:**
- Modify: `src/App.css`
- Modify: `src/index.css` only if needed
- Modify: `README.md` only if Builder workflow needs documentation

- [ ] Add styles for extracted components without changing the existing design direction.
- [ ] Verify focus states, responsive behavior, empty states, and reduced motion remain present.
- [ ] Run `npm run lint` and `npm run build` when a local checkout is available.
- [ ] Inspect the resulting GitHub files and commit status; do not claim a passing build without evidence.

### Task 5: Final acceptance and push

**Files:**
- No additional source files unless verification exposes a concrete issue.

- [ ] Check routes `/`, `/about`, `/projects`, `/contact`, `/builder`, and `/projects/:id`.
- [ ] Check all six Builder entities and JSON export.
- [ ] Check dark/light persistence and mobile layout.
- [ ] Check repository `main` contains the final commits.
- [ ] Report any unavailable local verification honestly.
