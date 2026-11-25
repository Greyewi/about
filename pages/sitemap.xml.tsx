import type { GetServerSideProps } from 'next'
import { PUBLIC_ROUTES, baseUrlFromRequest, localePath } from '../src/seo'
import { ARTICLES, ARTICLE_IDS, articleLocales, articlePath } from '../src/articles'

// Keep in sync with i18n in next.config.js.
const locales = ['en', 'ru']
const defaultLocale = 'en'

export default function Sitemap() {
    return null
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const base = baseUrlFromRequest(req)
    const url = (path: string, locale: string) => `${base}${localePath(path, locale, defaultLocale)}`

    // One <url> per locale the page exists in, each listing all its language versions.
    const urlEntries = (path: string, pageLocales: string[], lastmod?: string) => pageLocales.map(locale => {
        const xDefault = pageLocales.includes(defaultLocale) ? defaultLocale : locale
        const alternates = pageLocales
            .map(alt => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${url(path, alt)}"/>`)
            .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(path, xDefault)}"/>`)
            .join('\n')
        const modified = lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ''
        return `  <url>\n    <loc>${url(path, locale)}</loc>\n${modified}${alternates}\n  </url>`
    })

    const entries = [
        ...PUBLIC_ROUTES.flatMap(path => urlEntries(path, locales)),
        // Articles may exist in one locale only.
        ...ARTICLE_IDS.flatMap(id => urlEntries(articlePath(id), articleLocales(id), ARTICLES[id].updated)),
    ]

    res.setHeader('Content-Type', 'application/xml; charset=utf-8')
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`)
    res.end()
    return { props: {} }
}
