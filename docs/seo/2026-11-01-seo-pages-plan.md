# SEO-план: страницы и статьи

Источник: исследование в Claude Docs — https://claude.ai/artifact/8eKHBjj74kUMtm3Dq3CffS (раздел «План работ»).

## Рамки

- Сегменты: RU (Россия + СНГ, Яндекс и Google) и EN (весь мир, Google).
- Каждая страница существует на RU и EN (`/…` и `/en/…` по текущей схеме `localePath`).
- Не делаем: TON, Telegram Mini Apps, страницы «курсы», «репетитор с нуля», EN «frontend mentor», отдельные страницы backend, fullstack и SQL.
- Tonstakers остаётся в CV и на таймлайне истории как опыт работы; страниц, кейсов и статей про него нет.
- Страницы услуг сейчас есть только в ветке `i18n-ru` (коммит b50cff7), в `main` их нет.

## Что есть на каждой странице услуги

- H1 и Title под главный запрос, meta description, canonical и hreflang.
- Цены «от» и пакеты.
- Бесплатное знакомство на 15–30 минут и CTA.
- Кейс или отзыв с цифрами.
- FAQ с разметкой FAQPage, разметка Service и Person.
- Ссылки на родительский хаб, соседние страницы и связанные статьи.

## Страницы

Статус: `—` не начат, `в работе`, `сделано`.

### Уже есть в i18n-ru, дорабатываем

| # | URL | Что меняется | Brainstorming |
|---|---|---|---|
| 1 | /services | Каталог направлений, ссылки на все страницы услуг | — |
| 2 | /services/mentoring | Хаб fullstack-менторства: JS/TS, React; блок `#backend` (Node.js, Express, Nest.js, Prisma) и блок SQL/PostgreSQL. Ловит «ментор по программированию», «ментор it». Убрать пункт про Web3 на TON | — |
| 3 | /services/qa | Хаб QA: ссылки на Playwright и переход в автоматизацию, SQL для тестировщика | — |
| 4 | /services/ai | Хаб ИИ: ссылки на Claude Code и внедрение в бизнес | — |

### Этап 1 — декабрь 2026 – январь 2027

| # | URL | H1 (RU) | Title (EN) | Главные запросы | Brainstorming |
|---|---|---|---|---|---|
| 5 | /services/ai/claude-code | Обучение Claude Code и вайб-кодингу 1-на-1 | Claude Code & Vibe Coding Coaching, 1:1 with a Senior Developer | claude code обучение, вайб-кодинг наставник, claude code for beginners | сделано: аудитория — новички, выпускники и ищущие работу; бизнес и разработчики — короткие пункты; этапы без сроков |
| 6 | /services/mentoring/mock-interview | Мок-собеседование frontend и backend, подготовка к техническому интервью | Frontend Mock Interview with a Senior Engineer | мок собеседование frontend, подготовка к собеседованию в Яндекс, собеседование backend, frontend interview prep | сделано: frontend и backend на одной странице, разбор после собеседования, под конкретную компанию |
| 7 | /services/mentoring/frontend | Ментор по frontend: JavaScript, TypeScript, React | React & JavaScript Mentor for Developers, 1:1 | ментор frontend, ментор фронтенд, react mentor | сделано |
| 8 | /blog, /blog/[slug] | Блог: список и шаблон статьи (разметка Article, sitemap, ссылка на страницу услуги) | — | — | — |

### Этап 2 — февраль – март 2027

| # | URL | H1 (RU) | Title (EN) | Главные запросы | Brainstorming |
|---|---|---|---|---|---|
| 9 | /services/qa/playwright | Playwright на TypeScript с ментором | Playwright TypeScript Tutor: 1:1 Mentoring for Testers | курс playwright typescript, sdet mentor | — |
| 10 | /services/qa/manual-to-automation | Из ручного тестирования в автоматизацию на JS/TS | Switch from Manual to Automation Testing: Mentored Roadmap | переход из ручного тестирования в автоматизацию | — |
| 11 | /services/code-review | Код-ревью и аудит: React/TS, Node.js, автотесты | Code Review Service for React, Node.js & Test Suites | аудит кода react, ревью автотестов, code review service | — |
| 12 | /services/ai/business | Внедрение ИИ в малый бизнес: консультация, чат-боты, обучение команды | AI Consultant for Small Business: Implementation & Team Training | консультация по внедрению ИИ, ai implementation consultant | — |

### Этап 3 — апрель – май 2027

| # | URL | H1 (RU) | Title (EN) | Главные запросы | Brainstorming |
|---|---|---|---|---|---|
| 13 | /services/web3 | Web3-фронтенд: dApp на EVM и Solana | Web3 Frontend Developer: dApps on EVM & Solana | hire web3 developer, walletconnect v2, разработка dapp | — |
| 14 | /cases/p2e-nft-marketplace | Кейс: NFT-маркетплейс, WalletConnect v2 и парсер блоков Ethereum | Case Study: In-game NFT Marketplace & Ethereum Block Indexer | создать nft маркетплейс | — |

## Статьи, первая волна (12 статей, 18 текстов)

| Месяц | Статья | Язык | Ведёт на |
|---|---|---|---|
| 1 | Claude Code для новичков: установка на Windows и Mac и первый проект за час | RU + EN | /services/ai/claude-code |
| 1 | Что такое мок-собеседование и как к нему готовиться | RU | /services/mentoring/mock-interview |
| 2 | Claude Code vs Cursor vs Codex: что выбрать в 2026 | RU + EN | /services/ai/claude-code |
| 2 | Как проходит frontend-собеседование в Яндексе | RU | /services/mentoring/mock-interview |
| 3 | CLAUDE.md: как написать, шаблон для React/TS-проекта | RU + EN | /services/ai/claude-code |
| 3 | Roadmap: из ручного QA в автоматизацию на TypeScript за 3–6 месяцев | RU | /services/qa/manual-to-automation |
| 4 | Skills, hooks, subagents и MCP в Claude Code: практический гайд | RU | /services/ai/claude-code |
| 4 | Чек-лист ревью автотестов Playwright (лид-магнит) | RU + EN | /services/code-review |
| 5 | Сколько стоит внедрение ИИ в малый бизнес в 2026 | RU | /services/ai/business |
| 5 | Flaky-тесты в Playwright: причины и как их чинить | RU + EN | /services/qa/playwright |
| 6 | SQL на собеседовании: вопросы и задачи | RU | /services/mentoring/mock-interview |
| 6 | Ремонт вайб-кода: почему он ломается и как довести его до продакшена | RU + EN | /services/ai/claude-code |

Кросспост на Хабр и vc.ru: «Что такое мок-собеседование», «Claude Code vs Cursor vs Codex», «Roadmap из ручного QA», «Сколько стоит внедрение ИИ».

Вторая волна (июнь – ноябрь 2027, 12 статей) — темы по данным Search Console. Кандидаты: вопросы на собеседовании backend и Node.js; SQL для тестировщика; как из junior стать middle frontend; собеседования в Ozon, Т-Банк, Сбер; NestJS + Prisma; Playwright MCP и AI-агенты в тестировании; локальные нейросети для бизнеса; вайб-кодинг для предпринимателей; Claude Code в команде; резюме frontend-разработчика и «как найти ментора в IT»; WalletConnect v2 и индексатор блоков Ethereum.

## Этап 0 — ноябрь 2026

- [ ] Влить `i18n-ru` в `main`.
- [x] Убрать TON из текстов услуг (RU и EN) и из строки про обучение Web3 в CV.
- [ ] Подключить сайт к Google Search Console и Яндекс.Вебмастеру.
- [ ] Сверить частоты ключей в Wordstat и Keyword Planner.
- [ ] Завести профили на Solvery, Хабр Экспертах, GetMentor и MentorCruise.

## Когда выделять backend в отдельную страницу

Если через 2–3 месяца в Search Console появятся показы по backend-запросам («ментор node.js», «собеседование backend»), или если понадобится отдельная ссылка для профилей на площадках — сделать `/services/mentoring/backend` по тому же шаблону.
