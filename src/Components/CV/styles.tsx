import styled from 'styled-components'
import {variables} from "../../styles";

export const CVContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  background-color: ${variables.text10Color};
  font-family: 'RobotoSlab',serif;
  display: flex;
`

export const CVLeftAside = styled.div`
  width: calc(30vw - 36px);
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
  
  h3, h4 {
    margin: 0;
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
  padding: 18px 18px 0;
  width: calc(70vw - 36px);
  color: rgba(0,0,0,0.8);
  line-height: 26px;
  min-height: fit-content;
`

export const CVMainCaption = styled.h2`
  border-top: 1px solid rgba(42, 33, 33, 0.3);
  border-bottom: 1px solid rgba(42, 33, 33, 0.2);
  line-height: 50px;
  margin: 10px 0 10px;
`

export const CVMainText = styled.div`
  width: calc(70vw - 36px);
`

export const CVExperiencePoint = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

export const CVExperienceDate = styled.div`
  width: 15%;
`

export const CVExperienceBody = styled.div`
  width: 85%;
`

export const CVExperienceTitle = styled.h2`
  margin: 0 0 5px;
  padding: 0;
`

export const CVExperienceCompany = styled.span`
  font-style: italic;
`

export const CVExperienceLogo = styled.div`
  padding: 18px 0 18px;
  
  img {
    max-width: calc(100% - 36px);
    max-height: 100%;
    background-color: #fff;
    border: 1px solid rgba(0,0,0, 0.2);
  }
`