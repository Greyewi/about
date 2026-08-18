import React from 'react'
import dynamic from 'next/dynamic'
import { Wrapper, VisuallyHidden } from '../../styles'
import { Legend, Description, Cursor } from './styles'
import usePrintText from '../../Hooks/usePrintText'
import { useTranslation } from '../../i18n/useTranslation'

const PopupWidget = dynamic<any>(
    () => import('react-calendly').then(m => m.PopupWidget),
    { ssr: false }
)

function Main() {
    const { main, ui } = useTranslation()
    const { text: legend, phase } = usePrintText(70, main.greeting)
    return (
        <Wrapper>
            <Legend>
              {/* Real, complete greeting text present in the initial SSR HTML —
                  usePrintText only builds `legend` up client-side over ~2s+, so
                  without this the <h1> (the page's single most important piece
                  of on-page text) renders empty for any crawler or link-preview
                  bot that doesn't execute JS, and briefly for ones that do. */}
              <VisuallyHidden>{main.greeting}</VisuallyHidden>
              <span aria-hidden="true">{legend}</span><Cursor $phase={phase} />
            </Legend>
            <Description>
                {main.description}
            </Description>
            <PopupWidget
                url="https://calendly.com/greyewi/60min"
                rootElement={typeof document !== 'undefined'
                    ? (document.getElementById('modal') ?? document.createElement('div'))
                    : undefined as unknown as HTMLElement}
                text={ui.calendlyCta}
                textColor="#1C2C35"
                color="#B0FBBC"
            />
        </Wrapper>
    )
}

export default Main
