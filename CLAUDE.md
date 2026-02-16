# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ThemeCraft is a React design system library with pure CSS variables theming (no CSS-in-JS). It exports ES + CJS bundles, TypeScript declarations, and CSS files. Targets React 18/19, WCAG AA accessible.

## Commands

- `npm run storybook` — dev environment (port 6006)
- `npm run build` — TypeScript check + Vite library build
- `npm test` — run all Vitest tests
- `npm test -- src/components/Button/Button.test.tsx` — run a single test file
- `npm run test:coverage` — tests with V8 coverage
- `npm run typecheck` — TypeScript validation only
- `npm run lint` — ESLint (zero warnings allowed)
- `npm run format` — Prettier formatting
- `npm run website` — dev the showcase website (separate Vite app in `website/`)

## Architecture

### CSS Token System (three tiers)

1. **Primitive tokens** (`src/styles/tokens/colors.css`, `spacing.css`, etc.) — raw values (color scales 50–950, spacing scale)
2. **Semantic tokens** (`src/styles/themes/base.css`) — purpose-named variables (`--tc-fg-primary`, `--tc-bg-secondary`, `--tc-border-primary`, `--tc-interactive-primary`)
3. **Theme overrides** (`src/styles/themes/light.css`, `dark.css`) — mode-specific reassignments of semantic tokens
4. **Accent presets** (`src/styles/themes/presets/`) — `ocean`, `forest`, `sunset`, `berry`, `slate` swap primary color palette

Theming is applied via `data-theme` and `data-accent` attributes on the root element, managed by `ThemeProvider`.

### Component Conventions

Each component lives in `src/components/ComponentName/` with:
- `Component.tsx` — uses `forwardRef`, destructures props with defaults
- `Component.types.ts` — props interface extending types from `src/types/common.ts`
- `Component.css` — BEM classes prefixed `tc-` (e.g., `tc-button`, `tc-button--solid`, `tc-button__icon`)
- `Component.stories.tsx` — Storybook stories
- `Component.test.tsx` — Vitest + Testing Library
- `index.ts` — barrel exports

All components must be re-exported from `src/components/index.ts` and `src/index.ts`.

### Shared Types (`src/types/common.ts`)

- `Size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `ColorVariant`: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'`
- `BaseComponentProps`: `className`, `style`, `data-testid`
- `FormFieldProps`: `name`, `required`, `readOnly`, `error`, `disabled`
- Polymorphic types: `AsProps`, `PolymorphicProps`, `PolymorphicRef`

### Utilities

- `cn(...classes)` — conditional class name joining (like clsx), from `src/utils/classNames.ts`
- `createBEM(block)` — returns a function: `bem('element', 'modifier')` → `block__element--modifier`
- `mergeRefs` — combine multiple refs

### Compound Components

Some components use a compound pattern: `Card` + `CardHeader`/`CardBody`/`CardFooter`, `Modal` + `ModalHeader`/`ModalBody`/`ModalFooter`. These are separate named exports.

### Build Output

Vite library mode produces:
- `dist/index.js` (ESM) + `dist/index.cjs` (CJS) + `dist/index.d.ts`
- `dist/styles/index.css` — bundled styles
- `dist/styles/themes/*` — individual theme files

Path alias: `@` → `./src` (Vite + TypeScript)

### Website

`website/` is a standalone Vite React app that imports from the library source via alias `@themecraft` → `../src`. It has its own `package.json`.

## CSS Naming Rules

- All classes use `tc-` prefix
- BEM convention: `tc-block`, `tc-block__element`, `tc-block--modifier`
- Component styles must only use CSS custom properties from the token system for colors, spacing, typography, shadows, and borders

## Additional Documentation

- `docs/AGENTS.md` — component usage patterns, standard props, and theming quick reference
- `docs/COMPONENTS.md` — comprehensive component API reference
