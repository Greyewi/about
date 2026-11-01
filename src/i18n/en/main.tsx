import type { MainText } from '../types'
import { OuterLink } from '../../Pages/Main/styles'

export const main: MainText = {
  intro: [
    `Wake up, Neo...`,
    `The Matrix has you...`,
    `Follow the white rabbit.`,
    `Knock, knock, Neo.`,
  ],
  greeting: `Hi there! I'm Suntsev Sergey.
                I'm glad to see you on my site. Make yourself at home!`,
  description: (
    <>
      I specialize in quality web development.<br/>
      I share my life on <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink>, my career on <OuterLink href="https://www.linkedin.com/in/sergey-suntsev-219817113">LinkedIn</OuterLink>, and commit code to <OuterLink href="https://github.com/Greyewi">GitHub</OuterLink>.
    </>
  ),
}
