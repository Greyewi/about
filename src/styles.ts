import styled, {createGlobalStyle} from 'styled-components'
import PressStart from './shared/fonts/PressStart.ttf'
import SuperLegend from './shared/fonts/SuperLegend.ttf'
import ModeSeven from './shared/fonts/Modeseven.ttf'
import Ubuntu from './shared/fonts/Ubuntu-Regular.ttf'
import RobotoSlab from './shared/fonts/RobotoSlab.ttf'

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
    @font-face {
      font-family: 'Ubuntu';
      src: url(${Ubuntu}) format('truetype');
      font-style: normal;
      font-display: auto;
    }
   
    @font-face {
        font-family: 'RobotoSlab';
        src: url(${RobotoSlab}) format('truetype');
        font-style: normal;
        font-display: auto;
      }
    
    * {
        transition-duration: 300ms;
    }
    body {
      font-family: 'ModeSeven', 'Legend', 'Ubuntu', sans-serif;
      background-color: ${variables.blue20Color};
      width:100%;
      height:100vh;
      display: flex;
      justify-content: center;
      transition-duration: 300ms;
    }
    a {
      text-decoration: none;
      border-bottom: 1px solid transparent;
      color: ${variables.glow10Color};
      
      &:hover {
        border-bottom: 1px solid ${variables.glow20Color};
      }
    }
    hr {
      width: 100%;
      margin: 0;
    }
    ul {
      margin: 0;
    }
    ol {
      margin: 15px 0;
      
      @media (max-width: 768px) {
        margin: 10px 0;
      }
    }
    .clickable {
      cursor: pointer;
      width:fit-content;
      padding-bottom: 1px;
      transition-duration: 0ms;
    }
    
    .clickable:hover {
      border-bottom: 1px solid ${variables.glow20Color};
      display:block;
      padding-bottom: 0;
    }
`;


export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 142%;
    color: ${variables.text10Color};
    margin: 15px 0;
    
    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 134%; 
        margin: 10px 0;
    }
`

export const H2 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    color: ${variables.text10Color};
    margin: 15px 0;
    
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 29px;
        margin: 10px 0;
    }
`
export const H3 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    color: ${variables.text10Color};
    margin: 15px 0;
    
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        margin: 10px 0;
    }
`

export const Typography = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 1.5;
    color: ${variables.text20Color};
    
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`

export const WrapperInline = styled.div`
  display: flex;
  width: calc(100vw - 20%);
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  
  @media (max-width: 768px) {
        width: calc(100vw - 6%);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 20%);
  margin: 25px 0 10px 13%;
  line-height: 1.5;
  
  @media (max-width: 768px) {
        width: calc(100vw - 6%);
  }
`

export const Description = styled.div`
    color: ${variables.text10Color};
    margin: 15px 0;
    line-height: 1.5;
    
    @media (max-width: 768px) {
       margin: 10px 0;
  }
`