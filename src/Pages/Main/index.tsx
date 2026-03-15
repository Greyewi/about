import React from 'react'
import dynamic from 'next/dynamic'
import { Wrapper } from '../../styles'
import { Legend, Description, OuterLink, Cursor } from './styles'
import usePrintText from '../../Hooks/usePrintText'

const PopupWidget = dynamic<any>(
    () => import('react-calendly').then(m => m.PopupWidget),
    { ssr: false }
)

const fullLegend = `Hi there! I'm Suntsev Sergey.
                I'm glad to see you on my site. Make yourself at home!`

function Main() {
    const { text: legend, phase } = usePrintText(70, fullLegend)
    return (
        <Wrapper>
            <Legend>
              {legend}<Cursor $phase={phase} />
            </Legend>
            <Description>
                I specialize in quality web development.<br/>
              I show my journey on <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink> and commit code to <OuterLink href="https://github.com/Greyewi">Github</OuterLink>.
            </Description>
            <PopupWidget
                url="https://calendly.com/greyewi/60min"
                rootElement={typeof document !== 'undefined'
                    ? (document.getElementById('modal') ?? document.createElement('div'))
                    : undefined as unknown as HTMLElement}
                text="Click here to schedule!"
                textColor="#1C2C35"
                color="#B0FBBC"
            />
        </Wrapper>
    )
}

export default Main
