import styled from 'styled-components'
import {variables} from '../../styles'

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${variables.blue10Color};
  width:100vw;
  align-items: center;
`

export const NavBar = styled.span`
  display: flex;
  width: calc(100% + 30px);
  max-width: 650px;
  justify-content: space-evenly;
`

export const Logo = styled.div`
  width: 203px;
`