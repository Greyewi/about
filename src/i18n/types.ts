import type { ReactNode } from 'react'

export type Locale = 'en' | 'ru'

export interface UiText {
  nav: { main: string; story: string; cv: string }
  personName: string
  jobTitle: string
  calendlyCta: string
  cv: {
    personalInfo: string
    skills: string
    education: string
    experience: string
    phone: string
    email: string
    telegram: string
    linkedin: string
  }
}

export interface MainText {
  greeting: string
  description: ReactNode
}

export interface Dictionary {
  ui: UiText
  main: MainText
}
