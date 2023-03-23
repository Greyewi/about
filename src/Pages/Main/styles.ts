import styled from 'styled-components'
import {variables, H2} from '../../styles'
import MyPhoto from '../../shared/images/photo.jpeg'

export const Legend = styled.h1`
  color: ${variables.glow10Color};
  font-family: 'Legend','ModeSeven',Roboto,serif;
  line-height: 179%;
  font-weight: 500;
  font-size: 32px;
  margin: 100px 0 10px 13%;


  @media (max-width: 768px) {
    font-size: 25px;
    margin: 50px 0 10px 13%;
  }
`

export const OuterLink = styled.a.attrs((props) => ({ ...props }))`
  color: ${variables.glow20Color};
`

export const Description = styled.div`
    color: ${variables.text10Color};
    margin: 10px 0 190px 13%;
    line-height: 20px;
`

export const Photo = styled.div`
    height: 126px;
    min-width: 122px;
    max-width: 122px;
    border-radius: 50%;
    background: url(${MyPhoto}) top no-repeat;
    background-size: 160px;
    border: 4px solid ${variables.glow20Color};
    margin: 10px 0;
`
export const ArticleList = styled.div`
    display: flex;
    flex-direction: column;
    color: ${variables.text10Color};
    margin: 10px 0 10px 0;
    max-width: 90vw;
`

export const Article = styled.div`
    margin:25px 0;
    border: 1px solid ${variables.text20Color};
    border-radius: 5px;
    padding: 0 15px 15px 15px;
`

export const ArticleTitle = styled(H2)`
    margin: 0;
    border-bottom: 1px solid ${variables.text20Color};
    width: calc(100% + 15px);
    position: relative;
    left: -15px;
    padding: 15px 0 15px 15px;
    background-color: ${variables.blue30Color};
`

export const ArticleBody = styled.div`
    margin: 10px 0 10px 13%;
    line-height: 20px;
`