import type { Dictionary, Locale } from './types'
import { ui as enUi } from './en/ui'
import { main as enMain } from './en/main'
import { roadmap as enRoadmap } from './en/roadmap'
import { cv as enCv } from './en/cv'
import { ui as ruUi } from './ru/ui'
import { main as ruMain } from './ru/main'
import { roadmap as ruRoadmap } from './ru/roadmap'
import { cv as ruCv } from './ru/cv'

export const dictionaries: Record<Locale, Dictionary> = {
  en: { ui: enUi, main: enMain, roadmap: enRoadmap, cv: enCv },
  ru: { ui: ruUi, main: ruMain, roadmap: ruRoadmap, cv: ruCv },
}
