import type { MainText } from '../types'
import { OuterLink } from '../../Pages/Main/styles'

export const main: MainText = {
  greeting: `Здравствуйте! Меня зовут Сергей Сунцев.
                Рад видеть вас на своём сайте.`,
  description: (
    <>
      Специализируюсь на качественной веб-разработке.<br/>
      Свой путь показываю в <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink>, а код пишу на <OuterLink href="https://github.com/Greyewi">Github</OuterLink>.
    </>
  ),
}
