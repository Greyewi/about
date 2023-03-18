import styled from 'styled-components'
import {variables} from '../../styles'

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${variables.blue10Color};
  width:100vw;
  align-items: center;
  height: 100px;
`

export const NavBar = styled.span`
  display: flex;
  width: calc(100% + 30px);
  max-width: 650px;
  justify-content: space-evenly;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`


export const ExpandedBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 55px;
  cursor: pointer;
  justify-content: space-between;
`

export const Line = styled.span`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 9px;
  background-color: ${variables.text20Color};
`


export const Logo = styled.div`
  width: 203px;

  @media (max-width: 768px) {
    width: 170px;
  }
`