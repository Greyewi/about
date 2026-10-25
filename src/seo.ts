import type { IncomingMessage } from 'http'
import { cvStructure } from './i18n/structure'

// NEXT_PUBLIC_SITE_URL: the site's public base URL (e.g. https://example.com,
// no trailing slash). See README.md.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '')

// Routes listed in sitemap.xml, in both locales.
export const PUBLIC_ROUTES = ['/', '/services', '/services/mentoring', '/services/qa', '/services/ai', '/history', '/cv']

export const SAME_AS = [
  'https://www.linkedin.com/in/sergey-suntsev-219817113',
  'https://github.com/Greyewi',
  'https://www.instagram.com/greyewi',
  `https://t.me/${cvStructure.person.tg}`,
]

// sitemap.xml and robots.txt need absolute URLs. Without NEXT_PUBLIC_SITE_URL
// they fall back to the host the request came in on.
export const baseUrlFromRequest = (req: IncomingMessage): string => {
  if (SITE_URL) return SITE_URL
  const proto = (req.headers['x-forwarded-proto'] as string | undefined)?.split(',')[0] ?? 'http'
  return `${proto}://${req.headers.host}`
}

// Locale-prefixed path; the default locale is served unprefixed.
export const localePath = (path: string, locale: string, defaultLocale: string): string =>
  locale === defaultLocale ? path : (path === '/' ? `/${locale}` : `/${locale}${path}`)

// JSON for a <script type="application/ld+json">; `<` is escaped so a string
// can't close the script tag.
export const jsonLd = (data: object): { __html: string } =>
  ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') })
