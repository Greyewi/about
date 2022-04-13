import styled from 'styled-components'
import {variables} from "../../styles";

export const MapContainer = styled.div`
  width: 100vw;
  min-height: 580px;
  height: 70vh;
  background-color: ${variables.blue30Color};
  display: flex;
  align-items: center;
  overflow-x: scroll;
`

type LineProps = {
    width: number;
}

export const PointArea = styled.div`
  width: 300px;
  display: flex;
`

type PointProps = {
    onClick?: () => void;
    clickable?: boolean
}

interface Props {
    isExpand: boolean,
    className?: string,
    top?: string,
    isSlide?: boolean
}

export const Line = styled.span<LineProps>`
  min-width: ${props => props.width + "px"};
  height: 5px;
  background-color: #e1dcd0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 0 4px 0 rgb(0 0 0 / 50%);
`

export const Point = styled.div<PointProps>`
  width: 15px;
  height: 15px;
  background-color: #e1dcd0;
  border-radius: 50%;
  cursor: ${props => props.clickable ? "pointer" : "auto"};
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 50%);
  color: #dcdcd2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
`

export const Addition = styled.div`
  width: fit-content;
  height: fit-content;
  position:absolute;
  top: -40px;
  left: -10px;
`

export const Expand = styled.div<Props>`
  border: 2px solid #e1dcd0;
  height: fit-content;
  max-height: 250px;
  padding: 5px;
  border-radius: 7px;
  position:absolute;
  top: ${props => props.isSlide ? props.isExpand ? props.top : '0px' : props.top};
  width: 230px;
  opacity: ${props => props.isExpand ? "1" : '0'};
  z-index: ${props => props.isExpand ? "100" : '-1'};
  transition-duration: 1s;
  cursor: auto;
  font-family: 'RobotoSlab',serif;
`

export const Static = styled.div`
  position: absolute;
  top: 20px;
`

export const GoalPoint = styled.span`
  color: ${variables.text20Color}
`

