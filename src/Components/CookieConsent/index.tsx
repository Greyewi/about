import { Box, Text, Buttons, Accept, Decline } from './styles'
import { useTranslation } from '../../i18n/useTranslation'
import { useConsent, writeConsent } from '../../consent'
import { analyticsEnabled } from '../Analytics'

// Small cookie notice in the bottom-left corner. Shown until the visitor
// accepts or declines; analytics stays off until they accept.
export default function CookieConsent() {
    const { ui } = useTranslation()
    const consent = useConsent()

    // 'unknown' = server render / hydration, so nothing flashes for visitors who already chose.
    if (!analyticsEnabled || consent !== null) return null

    return (
        <Box role="region" aria-label={ui.cookies.label}>
            <Text>{ui.cookies.text}</Text>
            <Buttons>
                <Accept type="button" onClick={() => writeConsent('granted')}>{ui.cookies.accept}</Accept>
                <Decline type="button" onClick={() => writeConsent('denied')}>{ui.cookies.decline}</Decline>
            </Buttons>
        </Box>
    )
}
