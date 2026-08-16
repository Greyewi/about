import { useRouter } from 'next/router'
import { dictionaries } from './index'
import type { Dictionary, Locale } from './types'

export const useTranslation = (): Dictionary => {
  const { locale } = useRouter()
  return dictionaries[locale as Locale] ?? dictionaries.en
}
