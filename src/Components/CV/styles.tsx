import styled from 'styled-components'
import {variables} from "../../styles";

export const CVContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: ${variables.text10Color};
  font-family: 'RobotoSlab',serif;
  display: flex;
`

export const CVLeftAside = styled.div`
  width: calc(30vw - 36px);
  height: 100%;
  background-color: ${variables.blue20Color};
  padding: 0 18px;
  color: ${variables.text10Color};
  
  > h1 {
    font-size: 36px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  > h3 {
    margin-top: 0;
  }
`

export const CVAsideCaption = styled.div`
  width: calc(100%);
  background-color: ${variables.blue10Color};
  margin:0 -18px;
  padding: 5px 18px;
  font-size: 25px;
  font-weight: bold;
  font-family: 'RobotoSlab',serif;
`

type CVAsideParagraphProps = {
    height?: number
}

export const CVAsideParagraph = styled.div<CVAsideParagraphProps>`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: ${props => props.height + 'px'};
  line-height: 23px;
  
  a {
    color: ${variables.glow20Color}
  }
`


type CVSkillScaleProps = {
    percentage?: number
}

export const CVSkillScale = styled.div<CVSkillScaleProps>`
  height: 9px;
  background-color: ${variables.blue10Color};
  width: 100%;
  margin: 5px 0;
  position:relative;
  
    > div {
      background-color: ${variables.text10Color};
      height: 100%;
      width: ${props => props.percentage + "%"}
    }
`


export const CVAsideSkillLabelContainer = styled.div<CVAsideParagraphProps>`
  display: flex;
  justify-content:space-between;

  > label {
    opacity: 0.5;
  }
`


export const CVMainContainer = styled.div`
  padding: 20px 18px 0;
  width: calc(70vw - 36px);
`