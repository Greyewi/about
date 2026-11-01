import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'
import { GlobalStyles, Layout } from '../src/styles'
import Header from '../src/Components/Header'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useTranslation } from '../src/i18n/useTranslation'
import type { SeoText } from '../src/i18n/types'
import { cvStructure } from '../src/i18n/structure'
import { SITE_URL, SAME_AS, jsonLd, localePath } from '../src/seo'

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

// Bedstead (CC0, https://bjh21.me.uk/bedstead/) recreates the same SAA5050
// teletext glyphs as ModeSeven but also covers Cyrillic, so the Russian
// body text keeps the English look.
const bedstead = localFont({
  src: '../public/fonts/Bedstead.otf',
  variable: '--font-bedstead',
  display: 'block',
})

const fontVars = [modeSeven.variable, legendFont.variable, robotoSlab.variable, pressStart.variable, bedstead.variable].join(' ')

// Route (locale-free `router.pathname`) -> which pair of SeoText keys to use.
// Any route not listed here (e.g. /mind-map) falls back to the site-wide
// title/description.
const ROUTE_SEO_KEYS: Record<string, { title: keyof SeoText; description: keyof SeoText }> = {
  '/cv': { title: 'cvTitle', description: 'cvDescription' },
  '/history': { title: 'historyTitle', description: 'historyDescription' },
  '/services': { title: 'servicesTitle', description: 'servicesDescription' },
  '/services/mentoring': { title: 'mentoringTitle', description: 'mentoringDescription' },
  '/services/qa': { title: 'qaTitle', description: 'qaDescription' },
  '/services/ai': { title: 'aiTitle', description: 'aiDescription' },
  '/services/business': { title: 'businessTitle', description: 'businessDescription' },
  '/services/ai/claude-code': { title: 'claudeCodeTitle', description: 'claudeCodeDescription' },
  '/services/mentoring/mock-interview': { title: 'mockInterviewTitle', description: 'mockInterviewDescription' },
  '/services/mentoring/frontend': { title: 'frontendMentoringTitle', description: 'frontendMentoringDescription' },
}

const OG_LOCALES: Record<string, string> = { en: 'en_US', ru: 'ru_RU' }

// SITE_URL (src/seo.ts, from NEXT_PUBLIC_SITE_URL): the site's public base URL (e.g. https://example.com,
// no trailing slash), used to emit absolute canonical/hreflang tags. There is
// no domain configured anywhere else in this repo (only a deploy IP), so
// this must be set explicitly wherever the app is actually deployed — see
// README.md. Left unset, canonical URLs are emitted relative (still valid,
// still de-duplicates the /en/* pages Next's i18n routing produces) and
// hreflang is omitted entirely, since Google requires absolute URLs there.

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
  const pathFor = (loc: string) => localePath(asPath, loc, defaultLocale ?? 'en')

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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={ui.personName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content={OG_LOCALES[locale ?? 'en']} />
        {SITE_URL && <meta property="og:url" content={canonicalHref} />}
        {SITE_URL && <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />}
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: ui.personName,
          jobTitle: ui.jobTitle,
          email: `mailto:${cvStructure.person.email}`,
          image: SITE_URL ? `${SITE_URL}/og-image.jpg` : undefined,
          url: SITE_URL ? `${SITE_URL}${localePath('/', locale ?? 'en', defaultLocale ?? 'en')}` : undefined,
          sameAs: SAME_AS,
          knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Web3', 'AI agents', 'Mentoring'],
        })} />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}
