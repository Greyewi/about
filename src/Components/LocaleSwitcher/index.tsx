import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import type { Locale } from '../../i18n/types'
import { SwitcherContainer, LocaleLink, Divider } from './styles'
import { ARTICLES, articleBySlug, articleLocales } from '../../articles'
import { SERVICE_PATHS } from '../../serviceTree'

// Typed against the shared `Locale` (rather than inferred from `as const`)
// so this list can't silently drift from `dictionaries` in src/i18n/index.ts:
// a locale added here without first being added to the `Locale` union is a
// compile error, and adding it to `Locale` forces a `dictionaries` entry
// (Record<Locale, Dictionary>) before it type-checks. Without this link, a
// locale added only to next.config.js's `locales` array would render
// <html lang="xx"> (src/i18n/useTranslation falls back to `dictionaries.en`
// for any locale it doesn't recognise) — a foreign lang attribute over
// English content.
const LOCALES: readonly { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

const LocaleSwitcher = () => {
  const { asPath, locale, pathname, query } = useRouter()

  // An article may not exist in the other locale; link to its service page there instead of a 404.
  const article = pathname === '/articles/[slug]' ? articleBySlug(String(query.slug)) : undefined
  const hrefFor = (code: Locale) =>
    article && !articleLocales(article).includes(code) ? SERVICE_PATHS[ARTICLES[article].service] : asPath

  return (
    <SwitcherContainer>
      {LOCALES.map(({ code, label }, index) => {
        const active = locale === code
        return (
          <Fragment key={code}>
            {index > 0 && <Divider aria-hidden="true">|</Divider>}
            <LocaleLink
              href={hrefFor(code)}
              locale={code}
              $active={active}
              aria-current={active ? 'true' : undefined}
            >
              {label}
            </LocaleLink>
          </Fragment>
        )
      })}
    </SwitcherContainer>
  )
}

export default LocaleSwitcher
