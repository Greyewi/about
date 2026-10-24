import type { MainText } from '../types'
import { OuterLink } from '../../Pages/Main/styles'

export const main: MainText = {
  intro: [
    `Проснись, Нео...`,
    `Ты увяз в Матрице...`,
    `Следуй за белым кроликом.`,
    `Тук-тук, Нео.`,
  ],
  greeting: `Приветствую! Я Сергей Сунцев.
                Всегда рад гостям. Чувствуйте себя как дома!`,
  description: (
    <>
      Занимаюсь созданием приложений.<br/>
      О себе рассказываю в <OuterLink href="https://www.instagram.com/greyewi">Instagram</OuterLink> и <OuterLink href="https://www.linkedin.com/in/sergey-suntsev-219817113">LinkedIn</OuterLink>, а код выкладываю на <OuterLink href="https://github.com/Greyewi">GitHub</OuterLink>.
    </>
  ),
}
