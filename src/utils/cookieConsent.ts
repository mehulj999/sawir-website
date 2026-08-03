export const CONSENT_KEY = 'cookie-consent'
export const CONSENT_EVENT = 'cookie-consent-changed'

export type ConsentValue = 'accepted' | 'rejected'

export function getConsent(): ConsentValue | null {
  const value = localStorage.getItem(CONSENT_KEY)
  return value === 'accepted' || value === 'rejected' ? value : null
}

export function setConsent(value: ConsentValue) {
  localStorage.setItem(CONSENT_KEY, value)
  document.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
}
