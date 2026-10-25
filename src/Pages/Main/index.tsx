import React from 'react'
import { Wrapper } from '../../styles'
import { Legend, Description, Cursor } from './styles'
import usePrintText from '../../Hooks/usePrintText'
import { useTranslation } from '../../i18n/useTranslation'
import Contact from '../../Components/Contact'

interface Props {
    introIndex?: number
}

function Main({ introIndex }: Props) {
    const { main } = useTranslation()
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
            <Contact floating />
        </Wrapper>
    )
}

export default Main
