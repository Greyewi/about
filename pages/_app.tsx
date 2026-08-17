import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'
import { GlobalStyles, Layout } from '../src/styles'
import Header from '../src/Components/Header'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useTranslation } from '../src/i18n/useTranslation'
import type { SeoText } from '../src/i18n/types'

const modeSeven = localFont({
  src: '../public/fonts/Modeseven.ttf',
  variable: '--font-mode-seven',
  display: 'block',
})

const legendFont = localFont({
  src: '../public/fonts/SuperLegend.ttf',
  variable: '--font-legend',
  display: 'block',
})

const robotoSlab = localFont({
  src: '../public/fonts/RobotoSlab.ttf',
  variable: '--font-roboto-slab',
  display: 'block',
})

const pressStart = localFont({
  src: '../public/fonts/PressStart.ttf',
  variable: '--font-press-start',
  display: 'block',
})

const fontVars = [modeSeven.variable, legendFont.variable, robotoSlab.variable, pressStart.variable].join(' ')

// Route (locale-free `router.pathname`) -> which pair of SeoText keys to use.
// Any route not listed here (e.g. /mind-map) falls back to the site-wide
// title/description.
const ROUTE_SEO_KEYS: Record<string, { title: keyof SeoText; description: keyof SeoText }> = {
  '/cv': { title: 'cvTitle', description: 'cvDescription' },
  '/history': { title: 'historyTitle', description: 'historyDescription' },
}

// NEXT_PUBLIC_SITE_URL: the site's public base URL (e.g. https://example.com,
// no trailing slash), used to emit absolute canonical/hreflang tags. There is
// no domain configured anywhere else in this repo (only a deploy IP), so
// this must be set explicitly wherever the app is actually deployed — see
// README.md. Left unset, canonical URLs are emitted relative (still valid,
// still de-duplicates the /en/* pages Next's i18n routing produces) and
// hreflang is omitted entirely, since Google requires absolute URLs there.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '')

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { locale, defaultLocale, locales, pathname, asPath } = router
  const { ui } = useTranslation()

  const seoKeys = ROUTE_SEO_KEYS[pathname]
  const title = seoKeys ? ui.seo[seoKeys.title] : ui.seo.title
  const description = seoKeys ? ui.seo[seoKeys.description] : ui.seo.description

  // `asPath` is already locale-free under Next's Pages Router i18n routing
  // (e.g. on /ru/cv, router.asPath is '/cv' and router.locale is 'ru'), so
  // the current locale's own URL has to be reconstructed by re-adding its
  // prefix (skipped for the default locale, which is served unprefixed).
  const pathFor = (loc: string) =>
    loc === defaultLocale ? asPath : (asPath === '/' ? `/${loc}` : `/${loc}${asPath}`)

  const canonicalHref = SITE_URL ? `${SITE_URL}${pathFor(locale ?? defaultLocale ?? 'en')}` : pathFor(locale ?? defaultLocale ?? 'en')

  return (
    <Layout className={`App-header ${fontVars} locale-${locale ?? 'en'}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalHref} />
        {SITE_URL && (locales ?? []).map(loc => (
          <link key={loc} rel="alternate" hrefLang={loc} href={`${SITE_URL}${pathFor(loc)}`} />
        ))}
        {SITE_URL && (
          <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${pathFor(defaultLocale ?? 'en')}`} />
        )}
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}
