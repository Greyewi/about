import type { MainText } from '../types'
import { OuterLink } from '../../Pages/Main/styles'

export const main: MainText = {
  greeting: `Hi there! I'm Suntsev Sergey.
                I'm glad to see you on my site. Make yourself at home!`,
  description: (
    <>
      I specialize in quality web development.<br/>
      I show my journey on <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink> and commit code to <OuterLink href="https://github.com/Greyewi">Github</OuterLink>.
    </>
  ),
}
