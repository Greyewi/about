import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { SwitcherContainer, LocaleLink, Divider } from './styles'

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
] as const

const LocaleSwitcher = () => {
  const { asPath, locale } = useRouter()

  return (
    <SwitcherContainer>
      {LOCALES.map(({ code, label }, index) => (
        <Fragment key={code}>
          {index > 0 && <Divider>|</Divider>}
          <LocaleLink href={asPath} locale={code} $active={locale === code}>
            {label}
          </LocaleLink>
        </Fragment>
      ))}
    </SwitcherContainer>
  )
}

export default LocaleSwitcher
