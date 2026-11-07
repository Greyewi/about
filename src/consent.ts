import { useSyncExternalStore } from 'react'

// Cookie consent for analytics. The choice lives in localStorage; until the visitor
// accepts, no analytics script is loaded.

export type Consent = 'granted' | 'denied'

const STORAGE_KEY = 'cookie-consent'
const CHANGE_EVENT = 'cookie-consent-change'

// Fallback for when storage is blocked (private mode etc.): the choice still
// applies until the page is reloaded.
let memoryChoice: Consent | null = null

const readConsent = (): Consent | null => {
    try {
        const value = window.localStorage.getItem(STORAGE_KEY)
        if (value === 'granted' || value === 'denied') return value
    } catch {
        // ignore, use the in-memory choice
    }
    return memoryChoice
}

export const writeConsent = (value: Consent): void => {
    memoryChoice = value
    try {
        window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
        // ignore, memoryChoice covers this page view
    }
    window.dispatchEvent(new Event(CHANGE_EVENT))
}

const subscribe = (onChange: () => void): (() => void) => {
    window.addEventListener(CHANGE_EVENT, onChange)
    return () => window.removeEventListener(CHANGE_EVENT, onChange)
}

// 'unknown' on the server and during hydration, then the stored choice
// (null = the visitor hasn't chosen yet).
export const useConsent = (): Consent | null | 'unknown' =>
    useSyncExternalStore(subscribe, readConsent, () => 'unknown')
