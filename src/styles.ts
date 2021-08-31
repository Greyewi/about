import styled, {createGlobalStyle} from 'styled-components'
import PressStart from './shared/fonts/PressStart.ttf'
import SuperLegend from './shared/fonts/SuperLegend.ttf'
import ModeSeven from './shared/fonts/Modeseven.ttf'

interface IVariables {
    [property: string]: string
}

export const variables: IVariables = {
    blue10Color: '#111A20',
    blue20Color: '#1C2C35',
    blue30Color: '#243B4A',
    blue40Color: '#416883',
    blue50Color: '#5E8CA7',
    text10Color: '#ECF8FF',
    text20Color: '#C9E2F0',
    glow10Color: '#B0FBBC',
    glow20Color: '#82F9A1',
}

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'ModeSeven';
      src: url(${ModeSeven}) format('truetype');
      font-style: normal;
      font-display: auto;
    }
    @font-face {
      font-family: 'Legend';
      src: url(${SuperLegend}) format('truetype');
      font-style: normal;
      font-display: auto;
    }
    @font-face {
      font-family: 'PressStart';
      src: url(${PressStart}) format('truetype');
      font-style: normal;
      font-display: auto;
    }
    body {
      font-family: 'ModeSeven', 'Legend', Roboto;
      background-color: ${variables.blue20Color};
      width:100%;
      height:100vh;
      display: flex;
      justify-content: center;
    }
    a {
      text-decoration: none;
      border-bottom: 1px solid transparent;
      
      &:hover {
        border-bottom: 1px solid ${variables.glow20Color};
      }
    }
`;


export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 142%;
    color: ${variables.text10Color};
    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 134%; 
    }
`

export const H2 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    color: ${variables.text10Color};
    
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 29px;
    }
`

export const Typography = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 28px;
    color: ${variables.text20Color};
    
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
`

export const WrapperInline = styled.div`
  display: flex;
  width: calc(100vw - 20%);
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
        width: calc(100vw - 6%);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 20%);
  
  @media (max-width: 768px) {
        width: calc(100vw - 6%);
  }
`