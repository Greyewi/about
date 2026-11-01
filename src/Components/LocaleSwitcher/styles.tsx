import styled from 'styled-components'
import Link from 'next/link'
import { variables } from '../../styles'

export const SwitcherContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: 16px;
`

export const LocaleLink = styled(Link)<{ $active: boolean }>`
  font-size: 19px;
  line-height: 28px;
  color: ${({ $active }) => ($active ? variables.glow20Color : variables.text20Color)};
  /* Non-colour cue for the active locale (in addition to aria-current, for
     sighted users who can't rely on the colour difference alone). */
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Divider = styled.span`
  color: ${variables.blue50Color};
  /* ModeSeven (EN body font) draws '|' as a double bar, like the SAA5050
     teletext chip it copies; Bedstead draws a single one. Pin the divider
     to Bedstead so both locales show the same single bar. */
  font-family: var(--font-bedstead), sans-serif;
`
