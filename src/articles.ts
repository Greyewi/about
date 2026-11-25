import type { ArticleId, Locale, ServiceId } from './i18n/types'
import { dictionaries } from './i18n'

interface ArticleMeta {
  slug: string
  // Service page the article leads to; its hub chain forms the breadcrumbs.
  service: ServiceId
  // Other service pages that also link to the article.
  alsoOn?: ServiceId[]
  // ISO dates for Article JSON-LD, the byline and sitemap lastmod.
  published: string
  updated: string
}

// Articles have no index page and no menu entry: they are reached from links
// on service pages and listed in sitemap.xml.
export const ARTICLES: Record<ArticleId, ArticleMeta> = {
  claudeCodeBeginners: {
    slug: 'claude-code-for-beginners',
    service: 'claudeCode',
    alsoOn: ['ai'],
    published: '2026-11-21',
    updated: '2026-11-22',
  },
  mockInterviewGuide: {
    slug: 'mock-interview',
    service: 'mockInterview',
    alsoOn: ['mentoring', 'frontendMentoring'],
    published: '2026-11-21',
    updated: '2026-11-22',
  },
  claudeCodeVsCursorVsCodex: {
    slug: 'claude-code-vs-cursor-vs-codex',
    service: 'claudeCode',
    alsoOn: ['ai'],
    published: '2026-11-21',
    updated: '2026-11-22',
  },
}

export const ARTICLE_IDS = Object.keys(ARTICLES) as ArticleId[]

export const articlePath = (id: ArticleId): string => `/articles/${ARTICLES[id].slug}`

export const articleBySlug = (slug: string): ArticleId | undefined =>
  ARTICLE_IDS.find(id => ARTICLES[id].slug === slug)

// Locales the article is written in.
export const articleLocales = (id: ArticleId): Locale[] =>
  (Object.keys(dictionaries) as Locale[]).filter(locale => dictionaries[locale].articles[id])

// Articles to link from a service page, in the given locale.
export const articlesFor = (service: ServiceId, locale: Locale): ArticleId[] =>
  ARTICLE_IDS.filter(id =>
    (ARTICLES[id].service === service || ARTICLES[id].alsoOn?.includes(service))
    && dictionaries[locale].articles[id])
