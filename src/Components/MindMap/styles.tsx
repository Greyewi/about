import styled from 'styled-components'
import {variables} from "../../styles";

export const MMContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  background-color: ${variables.blue30Color};
  font-family: 'RobotoSlab',serif;
  display: flex;
`

export const MMItem = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 15px 20px;
  border-radius: 6px;
  border: 2px solid ${variables.text20Color};
  background-color: cadetblue;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  z-index: 9;
  color: ${variables.text10Color}
`

