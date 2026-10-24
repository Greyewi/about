import type { MainText } from '../types'
import { OuterLink } from '../../Pages/Main/styles'

export const main: MainText = {
  intro: [
    `Проснись, Нео...`,
    `Ты увяз в Матрице...`,
    `Следуй за белым кроликом.`,
    `Тук-тук, Нео.`,
  ],
  greeting: `Здравствуйте! Меня зовут Сергей Сунцев.
                Рад видеть вас на своём сайте. Чувствуйте себя как дома!`,
  description: (
    <>
      Специализируюсь на качественной веб-разработке.<br/>
      О своём пути рассказываю в <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink>, а код выкладываю на <OuterLink href="https://github.com/Greyewi">GitHub</OuterLink>.
    </>
  ),
}
