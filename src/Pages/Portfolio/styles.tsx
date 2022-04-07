import styled from 'styled-components'

export const MapContainer = styled.div`
  width: 100vw;
  height: 500px;
  background-color: rgba(49,67,90, 0.5);
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
}

interface Props {
    isExpand: boolean,
    className?: string
}

export const Line = styled.span<LineProps>`
  min-width: ${props => props.width + "px"};
  height: 5px;
  background-color: #e1dcd0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 1px 0 4px 0 rgb(0 0 0 / 50%);
`

export const Point = styled.div<PointProps>`
  width: 15px;
  height: 15px;
  background-color: #e1dcd0;
  border-radius: 50%;
  cursor: pointer;
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
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border-radius: 7px;
  position:absolute;
  top: -100px;
  display: ${props => props.isExpand ? "block" : 'none'};
  cursor: auto;
`

export const Static = styled.div`
  position: absolute;
  top: 20px;
`