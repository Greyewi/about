# Next.js Migration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the personal portfolio site from Create React App to Next.js 14 (Pages Router) with Node.js 22 LTS and React 18.

**Architecture:** Gradual migration — preserve all existing components, add Next.js file-based routing alongside existing `/src`, apply SSR compatibility fixes, then connect everything through new `pages/` directory. CRA entry point and `/src` cleanup is done manually by the user after the plan completes.

**Tech Stack:** Next.js 14, React 18, TypeScript, Styled Components 5 (SWC compiler), Node.js 22 LTS

**Spec:** `docs/superpowers/specs/2026-03-14-nextjs-migration-design.md`

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Create | `.nvmrc` | Pin Node.js 22 |
| Modify | `package.json` | Replace deps, update scripts/eslint |
| Modify | `tsconfig.json` | Next.js-compatible config |
| Create | `next.config.js` | SWC styled-components, strict mode |
| Create | `pages/_document.tsx` | HTML shell: fonts, favicon, #modal |
| Create | `pages/_app.tsx` | Global layout: Header, GlobalStyles, globals.css |
| Create | `styles/globals.css` | Contents of src/index.css |
| Create | `public/fonts/` | 4 active .ttf files |
| Modify | `src/styles.ts` | Remove .ttf imports and @font-face blocks |
| Copy → Modify | `components/RoadMap/index.tsx` | SSR guard: window access |
| Copy → Modify | `components/Modal/index.tsx` | SSR guard: document.querySelector |
| Copy → Modify | `components/Header/index.tsx` | next/link instead of react-router Link |
| Copy (unchanged) | `components/CV/`, `components/MindMap/`, etc. | Preserve as-is |
| Copy (unchanged) | `hooks/` | usePrintText, useTraceUpdate |
| Create | `pages/index.tsx` | / → Main |
| Create | `pages/history.tsx` | /history → RoadMap |
| Create | `pages/cv.tsx` | /cv → CV/Portfolio |
| Create | `pages/mind-map.tsx` | /mind-map → MindMap |

---

## Chunk 1: Environment & Configuration

### Task 1: Pin Node.js version

**Files:**
- Create: `.nvmrc`
- Modify: `package.json`

- [ ] **Step 1: Create `.nvmrc`**

```
22
```

- [ ] **Step 2: Add `engines` field to `package.json`**

In `package.json`, after `"private": true`, add:
```json
"engines": {
  "node": ">=22.0.0"
},
```

- [ ] **Step 3: Commit**

```bash
git add .nvmrc package.json
git commit -m "chore: pin Node.js to v22 LTS"
```

---

### Task 2: Replace dependencies in `package.json`

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Replace `scripts`**

Replace the entire `"scripts"` block in `package.json` with:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "bot": "ts-node-dev --respawn --transpile-only bot/server.ts",
  "botGame": "ts-node-dev --respawn --transpile-only botRougue/server.ts",
  "bot_deploy": "node bot/server.js"
},
```

Note: `bot` and `botGame` targets are preserved from the original `package.json`. Only `--respawn --transpile-only` flags are added for faster restarts. The `/bot` directory may not currently exist on disk — that is unchanged from the original.

- [ ] **Step 2: Replace `eslintConfig`**

Replace:
```json
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
},
```
With:
```json
"eslintConfig": {
  "extends": ["next/core-web-vitals"]
},
```

- [ ] **Step 3: Remove `browserslist`**

Delete the entire `"browserslist"` block from `package.json`.

- [ ] **Step 4: Update dependencies**

In `package.json` `"dependencies"`, make these changes:
- Remove: `"react-scripts": "^5.0.1"`
- Remove: `"react-router-dom": "^5.2.1"`
- Remove: `"@types/react-router": "^5.1.16"`
- Remove: `"@types/react-router-dom": "^5.1.8"`
- Remove: `"react-error-overlay": "^6.0.10"`
- Remove: `"web-vitals": "^1.0.1"`
- Change: `"react": "^17.0.2"` → `"react": "^18.3.1"`
- Change: `"react-dom": "^17.0.2"` → `"react-dom": "^18.3.1"`
- Change: `"@types/react": "^17.0.0"` → `"@types/react": "^18.3.0"`
- Change: `"@types/react-dom": "^17.0.0"` → `"@types/react-dom": "^18.3.0"`
- Add: `"next": "^14.2.0"`
- Add: `"eslint-config-next": "^14.2.0"`

- [ ] **Step 5: Install dependencies**

```bash
cd /Users/greyewi/WebstormProjects/about
npm install
```

Expected: no errors, `node_modules` updated.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: replace CRA with Next.js 14, upgrade React to 18"
```

---

### Task 3: Update `tsconfig.json`

**Files:**
- Modify: `tsconfig.json`

- [ ] **Step 1: Replace entire file contents**

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
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 2: Commit**

```bash
git add tsconfig.json
git commit -m "chore: update tsconfig.json for Next.js 14"
```

---

### Task 4: Create `next.config.js`

**Files:**
- Create: `next.config.js`

- [ ] **Step 1: Check for Babel config**

```bash
ls /Users/greyewi/WebstormProjects/about/.babelrc /Users/greyewi/WebstormProjects/about/babel.config.js 2>/dev/null && echo "FOUND - DELETE IT" || echo "Clean - no Babel config"
```

If any file is found, delete it before continuing. A Babel config disables SWC and breaks `compiler.styledComponents`.

- [ ] **Step 2: Create `next.config.js`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
```

- [ ] **Step 3: Commit**

```bash
git add next.config.js
git commit -m "chore: add Next.js configuration"
```

---

## Chunk 2: Base Structure

### Task 5: Migrate fonts to `/public/fonts`

**Files:**
- Create: `public/fonts/Modeseven.ttf` (copy)
- Create: `public/fonts/PressStart.ttf` (copy)
- Create: `public/fonts/SuperLegend.ttf` (copy)
- Create: `public/fonts/RobotoSlab.ttf` (copy)
- Modify: `src/styles.ts`

- [ ] **Step 1: Copy the 4 active font files**

```bash
mkdir -p /Users/greyewi/WebstormProjects/about/public/fonts
cp /Users/greyewi/WebstormProjects/about/src/shared/fonts/Modeseven.ttf /Users/greyewi/WebstormProjects/about/public/fonts/
cp /Users/greyewi/WebstormProjects/about/src/shared/fonts/PressStart.ttf /Users/greyewi/WebstormProjects/about/public/fonts/
cp /Users/greyewi/WebstormProjects/about/src/shared/fonts/SuperLegend.ttf /Users/greyewi/WebstormProjects/about/public/fonts/
cp /Users/greyewi/WebstormProjects/about/src/shared/fonts/RobotoSlab.ttf /Users/greyewi/WebstormProjects/about/public/fonts/
```

Do NOT copy `Ubuntu-Regular.ttf` or `oldSchool.ttf` — they are unused.

- [ ] **Step 2: Remove font imports and @font-face blocks from `src/styles.ts`**

Replace the top of `src/styles.ts`. Change this:
```ts
import styled, {createGlobalStyle} from 'styled-components'
import PressStart from './shared/fonts/PressStart.ttf'
import SuperLegend from './shared/fonts/SuperLegend.ttf'
import ModeSeven from './shared/fonts/Modeseven.ttf'
import RobotoSlab from './shared/fonts/RobotoSlab.ttf'
```
To this (remove all font imports):
```ts
import styled, {createGlobalStyle} from 'styled-components'
```

Then remove the entire `@font-face` section from `GlobalStyles`. Change `GlobalStyles` from:
```ts
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ModeSeven';
    src: url(${ModeSeven}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Legend';
    src: url(${SuperLegend}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'PressStart';
    src: url(${PressStart}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'RobotoSlab';
    src: url(${RobotoSlab}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  body {
```
To:
```ts
export const GlobalStyles = createGlobalStyle`
  body {
```

- [ ] **Step 3: Commit**

```bash
git add public/fonts/ src/styles.ts
git commit -m "feat: move fonts to /public/fonts, remove CRA font imports"
```

---

### Task 6: Create `styles/globals.css`

**Files:**
- Create: `styles/globals.css`

- [ ] **Step 1: Verify `src/index.css` content**

Read `src/index.css` to confirm it still contains only: `overscroll-behavior: none`, Calendly badge override, and `@media print` rules. The file was verified to contain exactly this at planning time, but confirm before creating the new file.

- [ ] **Step 2: Create the file**

```css
body {
  margin: 0;
  overscroll-behavior: none;
}

body .calendly-badge-widget .calendly-badge-content {
  font-family: 'Legend', 'ModeSeven', Roboto, serif;
}

@media print {
  .no-print, .no-print * {
    display: none !important;
  }
}
```

Note: The generic `font-family` stack from the original `index.css` body rule is intentionally omitted — `styles.ts` GlobalStyles sets `font-family: 'ModeSeven', 'Legend', Roboto` on body, which takes precedence.

- [ ] **Step 2: Commit**

```bash
git add styles/globals.css
git commit -m "feat: create global CSS from src/index.css"
```

---

### Task 7: Create `pages/_document.tsx`

**Files:**
- Create: `pages/_document.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/iconGreyewi.png" />
        <style>{`
          @font-face {
            font-family: 'ModeSeven';
            src: url('/fonts/Modeseven.ttf') format('truetype');
            font-style: normal;
            font-display: auto;
          }
          @font-face {
            font-family: 'Legend';
            src: url('/fonts/SuperLegend.ttf') format('truetype');
            font-style: normal;
            font-display: auto;
          }
          @font-face {
            font-family: 'PressStart';
            src: url('/fonts/PressStart.ttf') format('truetype');
            font-style: normal;
            font-display: auto;
          }
          @font-face {
            font-family: 'RobotoSlab';
            src: url('/fonts/RobotoSlab.ttf') format('truetype');
            font-style: normal;
            font-display: auto;
          }
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

- [ ] **Step 2: Commit**

```bash
git add pages/_document.tsx
git commit -m "feat: add Next.js _document with fonts, favicon, and modal root"
```

---

### Task 8: Create `pages/_app.tsx`

**Files:**
- Create: `pages/_app.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { AppProps } from 'next/app'
import { GlobalStyles, Layout } from '../src/styles'
import Header from '../src/Components/Header'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className="App-header">
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add pages/_app.tsx
git commit -m "feat: add Next.js _app with global layout"
```

---

## Chunk 3: SSR Fixes

### Task 9: Fix `RoadMap` SSR — window access

**Files:**
- Modify: `src/Components/RoadMap/index.tsx`

- [ ] **Step 1: Fix `useRef` initializer (line 8)**

Change:
```tsx
const {current} = useRef({
    roadMapWidth: StoryPointsDataList.length * 700,
    bodyStyle: window.document.body.style
})
```
To:
```tsx
const {current} = useRef<{
    roadMapWidth: number,
    bodyStyle: CSSStyleDeclaration | null
}>({
    roadMapWidth: StoryPointsDataList.length * 700,
    bodyStyle: null
})

useEffect(() => {
    current.bodyStyle = window.document.body.style
}, []) // empty deps — runs once on mount; current is a stable ref value
```

Place the new `useEffect` immediately after the `useRef` line, before the existing useEffects.

- [ ] **Step 2: Fix `handleSetRoadMapFocus` (line 40)**

Change:
```tsx
const handleSetRoadMapFocus = useCallback(
    () => window.scrollY === 0 ? current.bodyStyle.overflow = "hidden" : current.bodyStyle.overflow = "auto",
    [current])
```
To:
```tsx
const handleSetRoadMapFocus = useCallback(() => {
    if (typeof window === 'undefined' || !current.bodyStyle) return
    current.bodyStyle.overflow = window.scrollY === 0 ? "hidden" : "auto"
}, [current])
```

- [ ] **Step 3: Fix null checks on `current.bodyStyle` in `handleScroll`**

The existing `handleScroll` callback also accesses `current.bodyStyle` directly. Add a null guard at the top:

Change:
```tsx
const handleScroll = useCallback((e) => {
    const target = e.currentTarget
    const scrollLeft = target.scrollLeft
    const clientWidth = target.clientWidth

    setScrollPosition(e, Math.round(scrollLeft / (current.roadMapWidth - clientWidth) * (StoryPointsDataList.length -1)))

    target.scrollLeft = scrollLeft + e.deltaY
    if (target.offsetWidth + scrollLeft >= target.scrollWidth) {
        current.bodyStyle.overflow = "auto"
    }
    if (target.offsetWidth + scrollLeft < target.scrollWidth) {
        current.bodyStyle.overflow = "hidden"
    }
}, [setScrollPosition, current])
```
To:
```tsx
const handleScroll = useCallback((e) => {
    const target = e.currentTarget
    const scrollLeft = target.scrollLeft
    const clientWidth = target.clientWidth

    setScrollPosition(e, Math.round(scrollLeft / (current.roadMapWidth - clientWidth) * (StoryPointsDataList.length -1)))

    target.scrollLeft = scrollLeft + e.deltaY
    if (!current.bodyStyle) return
    if (target.offsetWidth + scrollLeft >= target.scrollWidth) {
        current.bodyStyle.overflow = "auto"
    }
    if (target.offsetWidth + scrollLeft < target.scrollWidth) {
        current.bodyStyle.overflow = "hidden"
    }
}, [setScrollPosition, current])
```

- [ ] **Step 4: Fix null check in cleanup `useEffect`**

Change:
```tsx
useEffect(() => {
    return () => {
        current.bodyStyle.overflow = "auto"
    }
}, [current])
```
To:
```tsx
useEffect(() => {
    return () => {
        if (current.bodyStyle) current.bodyStyle.overflow = "auto"
    }
}, [current])
```

- [ ] **Step 5: Fix null check in `handleSetRoadMapBlur`**

Change:
```tsx
const handleSetRoadMapBlur = useCallback(
    () => current.bodyStyle.overflow = "auto",
    [current])
```
To:
```tsx
const handleSetRoadMapBlur = useCallback(() => {
    if (current.bodyStyle) current.bodyStyle.overflow = "auto"
}, [current])
```

- [ ] **Step 6: Commit**

```bash
git add src/Components/RoadMap/index.tsx
git commit -m "fix: guard RoadMap window/document access for Next.js SSR"
```

---

### Task 10: Fix `Modal` SSR — document.querySelector at module level

**Files:**
- Modify: `src/Components/Modal/index.tsx`

- [ ] **Step 1: Replace the file**

Change from:
```tsx
import { createPortal } from 'react-dom';
import React, {FC} from 'react'
const modalRoot = document.querySelector('#modal')

type Props = {children: React.ReactElement}
export const Modal: FC<Props> = ({children}) => {
    return <section>
        {modalRoot && createPortal(children, modalRoot)}
    </section>
}
```
To:
```tsx
import { createPortal } from 'react-dom'
import React, { FC, useState, useEffect } from 'react'

type Props = { children: React.ReactElement }

export const Modal: FC<Props> = ({ children }) => {
    const [modalRoot, setModalRoot] = useState<Element | null>(null)

    useEffect(() => {
        setModalRoot(document.querySelector('#modal'))
    }, [])

    if (!modalRoot) return null

    return <section>{createPortal(children, modalRoot)}</section>
}
```

- [ ] **Step 2: Commit**

```bash
git add src/Components/Modal/index.tsx
git commit -m "fix: move Modal document.querySelector into useEffect for SSR"
```

---

### Task 11: Fix `Main` page — react-calendly SSR crash

**Files:**
- Modify: `src/Pages/Main/index.tsx`

- [ ] **Step 1: Replace the file**

Change from:
```tsx
import React from 'react';
import {Wrapper} from '../../styles'
import {Legend, Description, OuterLink} from './styles'
import { PopupWidget } from "react-calendly";
import usePrintText from '../../Hooks/usePrintText'

const fullLegend = `Hi there! I'm Suntsev Sergey.
                I'm glad to see you on my site. Make yourself at home!`

function Main() {
    const legend = usePrintText(70, fullLegend)
    return (
        <Wrapper>
            <Legend>
              {legend}
            </Legend>
            <Description>
                I specialize in quality web development.<br/>
              I show my journey on <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink> and commit code to <OuterLink href="https://github.com/Greyewi">Github</OuterLink>.
            </Description>
          <PopupWidget
            url="https://calendly.com/greyewi/60min"
            rootElement={document.getElementById("modal") || document.createElement('div')}
            text="Click here to schedule!"
            textColor="#1C2C35"
            color="#B0FBBC"
          />
        </Wrapper>
    )
}

export default Main;
```
To:
```tsx
import React from 'react'
import dynamic from 'next/dynamic'
import { Wrapper } from '../../styles'
import { Legend, Description, OuterLink } from './styles'
import usePrintText from '../../Hooks/usePrintText'

const PopupWidget = dynamic(
    () => import('react-calendly').then(m => m.PopupWidget),
    { ssr: false }
)

const fullLegend = `Hi there! I'm Suntsev Sergey.
                I'm glad to see you on my site. Make yourself at home!`

function Main() {
    const legend = usePrintText(70, fullLegend)
    return (
        <Wrapper>
            <Legend>
              {legend}
            </Legend>
            <Description>
                I specialize in quality web development.<br/>
              I show my journey on <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink> and commit code to <OuterLink href="https://github.com/Greyewi">Github</OuterLink>.
            </Description>
            <PopupWidget
                url="https://calendly.com/greyewi/60min"
                rootElement={typeof document !== 'undefined'
                    ? (document.getElementById('modal') ?? document.createElement('div'))
                    : document.createElement('div')}
                text="Click here to schedule!"
                textColor="#1C2C35"
                color="#B0FBBC"
            />
        </Wrapper>
    )
}

export default Main
```

- [ ] **Step 2: Commit**

```bash
git add src/Pages/Main/index.tsx
git commit -m "fix: use dynamic import for react-calendly PopupWidget to avoid SSR crash"
```

---

## Chunk 4: Pages & Navigation

### Task 12: Update `Header` — replace react-router Link with next/link

**Files:**
- Modify: `src/Components/Header/index.tsx`

- [ ] **Step 1: Replace import and usage**

Change from:
```tsx
import {Link} from 'react-router-dom'
```
To:
```tsx
import Link from 'next/link'
```

Then replace each `<Link to="...">` with `<Link href="...">`:

Change:
```tsx
<Link to="/"><Typography>Main</Typography></Link>
<Link to="/history"><Typography>Story</Typography></Link>
<Link to="/cv"><Typography>CV</Typography></Link>
{/*<Link to="/mind-map"><Typography>Mind map</Typography></Link>*/}
```
To:
```tsx
<Link href="/"><Typography>Main</Typography></Link>
<Link href="/history"><Typography>Story</Typography></Link>
<Link href="/cv"><Typography>CV</Typography></Link>
{/*<Link href="/mind-map"><Typography>Mind map</Typography></Link>*/}
```

- [ ] **Step 2: Commit**

```bash
git add src/Components/Header/index.tsx
git commit -m "feat: replace react-router Link with next/link in Header"
```

---

### Task 13: Create pages

**Files:**
- Create: `pages/index.tsx`
- Create: `pages/history.tsx`
- Create: `pages/cv.tsx`
- Create: `pages/mind-map.tsx`

- [ ] **Step 1: Create `pages/index.tsx`**

```tsx
import Main from '../src/Pages/Main'

export default function IndexPage() {
    return <Main />
}
```

- [ ] **Step 2: Create `pages/history.tsx`**

```tsx
import History from '../src/Pages/History'

export default function HistoryPage() {
    return <History />
}
```

- [ ] **Step 3: Create `pages/cv.tsx`**

```tsx
import Portfolio from '../src/Pages/Portfolio'

export default function CVPage() {
    return <Portfolio />
}
```

- [ ] **Step 4: Create `pages/mind-map.tsx`**

```tsx
import MindMap from '../src/Components/MindMap'

export default function MindMapPage() {
    return <MindMap />
}
```

- [ ] **Step 5: Commit**

```bash
git add pages/
git commit -m "feat: add Next.js pages wiring existing components"
```

---

## Chunk 5: Build Verification

### Task 14: Verify `next build` succeeds

- [ ] **Step 1: Run the build**

```bash
cd /Users/greyewi/WebstormProjects/about
npm run build
```

Expected: build completes without errors. Pages output:
```
Route (pages)          Size
┌ ○ /                  ...
├ ○ /cv                ...
├ ○ /history           ...
└ ○ /mind-map          ...
```

- [ ] **Step 2: If build fails — common fixes**

**`window is not defined` or `document is not defined`:** Most likely originates from `RoadMap` (`src/Components/RoadMap/index.tsx`). Verify Task 9 was applied correctly — all three callbacks (`handleScroll`, `handleSetRoadMapFocus`, `handleSetRoadMapBlur`) and the cleanup `useEffect` must have null guards on `current.bodyStyle`.

**TypeScript errors about `.ttf` imports:** Check if `src/fonts.d.ts` still has `declare module '*.ttf'`. It is now unused but harmless. If TypeScript complains, delete the file.

**`@types/react` version mismatch:** Run `npm ls react @types/react` and verify both are v18.

**Missing `next-env.d.ts`:** Running `next build` creates it automatically. If missing, run `npx next` once.

**Styled-components FOUC on dev:** Expected in dev mode. Only test in `next build` + `next start`.

- [ ] **Step 3: Test the dev server**

```bash
npm run dev
```

Open `http://localhost:3000` — verify:
- Main page loads with typewriter effect
- Navigation to `/history`, `/cv` works
- No console errors about `window` or `document`
- Calendly button appears

Open `http://localhost:3000/history` specifically — scroll the RoadMap horizontally and verify no console errors appear.

- [ ] **Step 4: Commit if any fixes were needed**

```bash
git add src/ pages/
git commit -m "fix: resolve Next.js build issues"
```

---

## Post-Plan (user does manually)

The following are intentionally out of scope and left to the user:

1. **Delete CRA artifacts:** `src/index.tsx`, `src/App.tsx`, `src/reportWebVitals.ts`, `src/setupTests.ts`, `src/fonts.d.ts`
2. **Verify Telegram bots** still work: `npm run botGame`, `npm run bot`
3. **VPS deployment:** `nvm use 22 && npm install && npm run build && npm start`
