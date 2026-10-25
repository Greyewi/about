# Next.js Migration Design

**Date:** 2026-03-14
**Project:** about (personal portfolio site)
**Scope:** Migrate from Create React App to Next.js 14 (Pages Router) + upgrade Node.js to v22 LTS

---

## Goals

- Upgrade Node.js from current version to v22 LTS
- Replace Create React App with Next.js 14 (Pages Router)
- Deploy on VPS with `next start`
- Preserve all existing UI components and styles with minimal changes
- Leave Telegram bots (`/botRougue`) untouched

## Out of Scope

- Deleting `/src` folder and CRA artifacts (user will do manually)
- Verifying Telegram bots after migration (user will do manually)
- Migrating to App Router
- API routes for bots
- Migrating to `next/image` (existing image imports stay as-is)

---

## Architecture

### Rendering Strategy

All pages are static (SSG). No `getServerSideProps` needed — content is client-side React as before. Build with `next build`, serve with `next start -p 3000` on VPS.

### Directory Structure

```
/about
├── /pages
│   ├── _app.tsx            # Global layout: Header, GlobalStyles, index.css import
│   ├── _document.tsx       # HTML shell: fonts, favicon, <title>, #modal div
│   ├── index.tsx           # / → Main page
│   ├── history.tsx         # /history → RoadMap/History
│   ├── cv.tsx              # /cv → CV/Portfolio
│   └── mind-map.tsx        # /mind-map → MindMap (kept, route inactive in Header)
├── /components             # Moved from /src/Components (unchanged except SSR guards)
│   ├── Header/
│   ├── CV/
│   ├── RoadMap/            # Requires SSR guard for `window` access
│   ├── MindMap/
│   └── Modal/
├── /hooks                  # Moved from /src/Hooks (unchanged)
├── /shared                 # Images and fonts source — fonts also copied to /public/fonts
├── /styles
│   └── globals.css         # Contents of src/index.css (overscroll, print, Calendly override)
├── /public
│   ├── fonts/              # Custom fonts (ModeSeven, PressStart, etc.)
│   └── iconGreyewi.png
├── /botRougue              # Untouched
├── next.config.js
├── .nvmrc                  # Node.js 22 LTS
└── package.json
```

### Removed

- `react-scripts`
- `react-router-dom`
- `/src/index.tsx` (CRA entry point)
- `/src/App.tsx` (replaced by `_app.tsx` + file-based routing)
- Font imports inside `styles.ts` (`.ttf` module imports → replaced by URL refs in `_document.tsx`)

---

## Key Configuration

### next.config.js

```js
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
}
module.exports = nextConfig
```

`compiler.styledComponents: true` uses Next.js SWC compiler for SSR support. **No `.babelrc` or `babel.config.js` must be present** — if found, delete it, otherwise SWC is disabled and styled-components SSR won't work.

### tsconfig.json (replace CRA version)

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### .nvmrc

```
22
```

### package.json

```json
"engines": {
  "node": ">=22.0.0"
},
"eslintConfig": {
  "extends": ["next/core-web-vitals"]
}
```

Remove `browserslist` field (CRA-specific, Next.js manages targets via SWC).

### package.json scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "bot": "ts-node-dev --respawn --transpile-only botRougue/server.ts",
  "botGame": "ts-node-dev --respawn --transpile-only botRougue/server.ts"
}
```

---

## SSR Compatibility Fixes

Next.js renders the first HTML on the server where `window` and `document` don't exist. Three components require guards:

### RoadMap — `window` access (two locations)

**Line 8:** `window.document.body.style` inside a `useRef` initializer. Fix: initialize as `null`, resolve in `useEffect`.

```tsx
// Before
const scroll = useRef({ bodyStyle: window.document.body.style, ... })

// After
const scroll = useRef<{ bodyStyle: CSSStyleDeclaration | null; ... }>({
  bodyStyle: null, ...
})
useEffect(() => {
  scroll.current.bodyStyle = window.document.body.style
}, [])
```

**Line 40:** `window.scrollY` inside `handleSetRoadMapFocus` useCallback. Fix: guard with `typeof window !== 'undefined'`.

```tsx
// Before
() => window.scrollY === 0 ? current.bodyStyle.overflow = "hidden" : ...

// After
() => {
  if (typeof window === 'undefined') return
  window.scrollY === 0 ? current.bodyStyle!.overflow = "hidden" : ...
}
```

### Modal — `document.querySelector` at module level

`/src/Components/Modal/index.tsx` line 3 calls `document.querySelector('#modal')` at the top level (outside any hook). This crashes on SSR. Fix: move to a `useEffect` with a state variable.

```tsx
// Before
const modalRoot = document.querySelector('#modal')

// After
const [modalRoot, setModalRoot] = useState<Element | null>(null)
useEffect(() => {
  setModalRoot(document.querySelector('#modal'))
}, [])
if (!modalRoot) return null
```

### Main page — `react-calendly` PopupWidget

`/src/Pages/Main/index.tsx` passes `document.getElementById("modal")` as `rootElement` prop. This crashes on SSR. Fix: use dynamic import with `ssr: false`.

```tsx
import dynamic from 'next/dynamic'

const PopupWidget = dynamic(
  () => import('react-calendly').then(m => m.PopupWidget),
  { ssr: false }
)
```

The `#modal` DOM node must also be recreated in `_document.tsx`:

```tsx
// pages/_document.tsx
<body>
  <Main />
  <NextScript />
  <div id="modal" />
</body>
```

---

## Font Migration

CRA allowed importing `.ttf` files as modules via webpack. In Next.js, fonts are served from `/public/fonts/` as static files.

**Only copy fonts referenced in `styles.ts`:** `Modeseven.ttf`, `PressStart2P-Regular.ttf`, `SuperLegend.ttf`, `RobotoSlab-Regular.ttf`. Skip `Ubuntu-Regular.ttf` and `oldSchool.ttf` — they are unused.

**Steps:**
1. Copy 4 active font files from `/src/shared/fonts/` → `/public/fonts/`
2. In `styles.ts`, remove all `.ttf` import statements and all `@font-face` blocks
3. In `pages/_document.tsx`, declare fonts via `<style>` in `<Head>`:

```tsx
<style>{`
  @font-face {
    font-family: 'ModeSeven';
    src: url('/fonts/ModeSeven.ttf') format('truetype');
  }
  /* ... other fonts */
`}</style>
```

---

## Global Styles

`src/index.css` contains styles not present in styled-components `GlobalStyles`:
- `overscroll-behavior: none` on `body`
- `.no-print` / `@media print` rules (used by CV print feature)
- Calendly badge override

These must be preserved. Create `/styles/globals.css` with the contents of `src/index.css`, then import in `_app.tsx`:

```tsx
import '../styles/globals.css'
```

---

## `_document.tsx` Structure

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/iconGreyewi.png" />
        <style>{`
          @font-face { font-family: 'ModeSeven'; src: url('/fonts/ModeSeven.ttf') format('truetype'); }
          @font-face { font-family: 'PressStart'; src: url('/fonts/PressStart2P-Regular.ttf') format('truetype'); }
          /* ... other fonts */
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal" />
      </body>
    </Html>
  )
}
```

Page-specific `<title>` tags go in each page file via `next/head`.

---

## React Version

Upgrade to React 18 (latest stable). Next.js 14 is designed for React 18 and supports all its features.

**Packages to update:**
- `react`: `^17.0.2` → `^18.3.1`
- `react-dom`: `^17.0.2` → `^18.3.1`
- `@types/react`: `^17.0.0` → `^18.3.0`
- `@types/react-dom`: `^17.0.0` → `^18.3.0`

**Breaking change:** React 18 removes `ReactDOM.render` in favour of `createRoot`. The CRA entry point (`src/index.tsx`) used `ReactDOM.render` — but since it is replaced by Next.js internals (`_app.tsx`), no manual migration is needed.

Note: `jsxRuntime: "automatic"` is the default in React 18 + Next.js, so no `tsconfig.json` change is needed for JSX.

---

## Migration Steps

1. **Update Node.js environment** — add `.nvmrc` with `22`, update `engines` in `package.json`
2. **Replace dependencies** — remove `react-scripts`, `react-router-dom`; add `next@14`, `eslint-config-next`; upgrade `react` and `react-dom` to `^18.3.1`, upgrade `@types/react` and `@types/react-dom` to `^18.3.0`; update `eslintConfig` and remove `browserslist`
3. **Update `tsconfig.json`** — replace CRA config with Next.js-compatible version (see above)
4. **Create base structure** — `pages/_app.tsx`, `pages/_document.tsx` (with fonts, favicon, `#modal`), `next.config.js`; verify no `.babelrc` exists
5. **Move components** — copy `/src/Components` → `/components`, `/src/Hooks` → `/hooks`
6. **Apply SSR fixes** — fix `RoadMap` window access and `react-calendly` dynamic import (see SSR section)
7. **Migrate fonts** — copy fonts to `/public/fonts`, remove TTF imports from `styles.ts`, declare via `_document.tsx`
8. **Migrate global CSS** — create `/styles/globals.css` from `src/index.css`, import in `_app.tsx`
9. **Create pages** — `pages/index.tsx`, `pages/history.tsx`, `pages/cv.tsx`, `pages/mind-map.tsx` from existing Page components; replace `react-router` `<Link>` with `next/link` in Header
10. **Verify build** — run `next build` and fix any remaining issues

Steps 11 (delete `/src`, old CRA config) and 12 (verify bots) are handled manually by the user.

---

## Deployment on VPS

```bash
nvm use 22
npm install
npm run build
npm start        # next start -p 3000
```

Optionally use PM2:

```bash
pm2 start npm --name "about" -- start
```
