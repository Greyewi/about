import type { GetServerSideProps } from 'next'
import type { Locale } from '../src/i18n/types'

// Mirrors next.config.js's `i18n.locales`/`defaultLocale` and pages/_app.tsx's
// ROUTE_SEO_KEYS route list. Kept as separate literals rather than importing
// next.config.js (a CJS file) into this page; if a locale or route is ever
// added, it needs to be added in both places — same as ROUTE_SEO_KEYS already
// requires today.
const LOCALES: readonly Locale[] = ['en', 'ru']
const DEFAULT_LOCALE: Locale = 'en'
const ROUTES = ['/', '/cv', '/history']

const localizedPath = (route: string, locale: Locale) => {
  if (locale === DEFAULT_LOCALE) return route
  return route === '/' ? `/${locale}` : `/${locale}${route}`
}

// No React output — this route only exists to write an XML response.
// Requires NEXT_PUBLIC_SITE_URL: sitemap entries must be fully-qualified
// URLs per the sitemaps.org spec (unlike the canonical tag, which can fall
// back to a relative URL), so with no site URL configured this intentionally
// serves an empty (but valid) urlset rather than emitting relative locs.
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '')

  const urlEntries = siteUrl
    ? ROUTES.flatMap(route =>
        LOCALES.map(locale => {
          const loc = `${siteUrl}${localizedPath(route, locale)}`
          const alternates = LOCALES
            .map(altLocale => `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${siteUrl}${localizedPath(route, altLocale)}" />`)
            .join('\n')
          const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${localizedPath(route, DEFAULT_LOCALE)}" />`
          return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n${xDefault}\n  </url>`
        })
      )
    : []

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlEntries.join('\n')}\n</urlset>\n`

  res.setHeader('Content-Type', 'application/xml')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default function SitemapXml() {
  return null
}
