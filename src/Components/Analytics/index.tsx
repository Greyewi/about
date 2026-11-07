import Script from 'next/script'
import { useConsent } from '../../consent'

// GA4 measurement ID from NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX), inlined at build time.
// The counter loads only in production builds, only with a valid-looking ID,
// and only after the visitor accepts cookies (see CookieConsent).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim()
export const analyticsEnabled = process.env.NODE_ENV === 'production' && !!GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID)

// Page views on client-side navigation are sent by GA4 itself
// ("Page changes based on browser history events" in Enhanced measurement, on by default).
export default function Analytics() {
    const consent = useConsent()

    if (!analyticsEnabled || consent !== 'granted') return null
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
        </>
    )
}
