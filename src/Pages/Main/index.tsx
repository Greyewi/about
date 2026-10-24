import React from 'react'
import dynamic from 'next/dynamic'
import { Wrapper } from '../../styles'
import { Legend, Description, Cursor } from './styles'
import usePrintText from '../../Hooks/usePrintText'
import { useTranslation } from '../../i18n/useTranslation'

const PopupWidget = dynamic<any>(
    () => import('react-calendly').then(m => m.PopupWidget),
    { ssr: false }
)

interface Props {
    introIndex?: number
}

function Main({ introIndex }: Props) {
    const { main, ui } = useTranslation()
    const intro = introIndex === undefined ? undefined : main.intro[introIndex]
    const { text: legend, phase } = usePrintText(70, main.greeting, intro)
    return (
        <Wrapper>
            <Legend>
              {legend}<Cursor $phase={phase} />
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
