import type { Dictionary, Locale } from './types'
import { ui as enUi } from './en/ui'
import { main as enMain } from './en/main'
import { ui as ruUi } from './ru/ui'
import { main as ruMain } from './ru/main'

export const dictionaries: Record<Locale, Dictionary> = {
  en: { ui: enUi, main: enMain },
  ru: { ui: ruUi, main: ruMain },
}
