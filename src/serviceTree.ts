import type { ServiceId } from './i18n/types'

// URL of each service page.
export const SERVICE_PATHS: Record<ServiceId, string> = {
  mentoring: '/services/mentoring',
  qa: '/services/qa',
  ai: '/services/ai',
  business: '/services/business',
  claudeCode: '/services/ai/claude-code',
  mockInterview: '/services/mentoring/mock-interview',
  frontendMentoring: '/services/mentoring/frontend',
}

// Child page -> its hub. Hubs are listed on /services; children are linked from their hub.
export const SERVICE_PARENT: Partial<Record<ServiceId, ServiceId>> = {
  claudeCode: 'ai',
  mockInterview: 'mentoring',
  frontendMentoring: 'mentoring',
}

export const childrenOf = (id: ServiceId): ServiceId[] =>
  (Object.keys(SERVICE_PARENT) as ServiceId[]).filter(child => SERVICE_PARENT[child] === id)
