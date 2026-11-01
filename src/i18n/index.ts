import type { Dictionary, Locale } from './types'
import { ui as enUi } from './en/ui'
import { main as enMain } from './en/main'
import { roadmap as enRoadmap } from './en/roadmap'
import { cv as enCv } from './en/cv'
import { services as enServices } from './en/services'
import { ui as ruUi } from './ru/ui'
import { main as ruMain } from './ru/main'
import { roadmap as ruRoadmap } from './ru/roadmap'
import { cv as ruCv } from './ru/cv'
import { services as ruServices } from './ru/services'

export const dictionaries: Record<Locale, Dictionary> = {
  en: { ui: enUi, main: enMain, roadmap: enRoadmap, cv: enCv, services: enServices },
  ru: { ui: ruUi, main: ruMain, roadmap: ruRoadmap, cv: ruCv, services: ruServices },
}
