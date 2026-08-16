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
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Divider = styled.span`
  color: ${variables.blue50Color};
`
