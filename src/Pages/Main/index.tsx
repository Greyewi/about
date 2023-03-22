import React from 'react';
import {Wrapper} from '../../styles'
import {Legend, Description, OuterLink} from './styles'
import { PopupWidget } from "react-calendly";
import usePrintText from '../../Hooks/usePrintText'

const fullLegend = `Hi there! I'm Suntsev Sergey.
                I'm glad to see you on my site. Make yourself at home!`

function Main() {
    const legend = usePrintText(70, fullLegend)
    return (
        <Wrapper>
            <Legend>
              {legend}
            </Legend>
            <Description>
                I specialize in quality web development.<br/>
              I show my journey on <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink> and commit code to <OuterLink href="https://github.com/Greyewi">Github</OuterLink>.
            </Description>
          <PopupWidget
            url="https://calendly.com/greyewi/60min"
            rootElement={document.getElementById("modal") || document.createElement('div')}
            text="Click here to schedule!"
            textColor="#1C2C35"
            color="#B0FBBC"
          />
        </Wrapper>
    )
}

export default Main;
