import styled, { css } from 'styled-components'
import { variables } from '../../styles'

export const OpenButton = styled.button<{ $floating?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background: ${variables.glow10Color};
  color: ${variables.blue20Color};
  font-family: inherit;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${variables.glow20Color};
  }

  ${({ $floating }) => $floating ? css`
    position: fixed;
    right: 20px;
    bottom: 15px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  ` : css`
    margin: 15px 0 10px 0;
  `}

  @media print {
    display: none;
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(17, 26, 32, 0.8);
`

export const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  padding: 25px;
  border: 1px solid ${variables.blue40Color};
  border-radius: 5px;
  background: ${variables.blue30Color};
  color: ${variables.text10Color};
`

export const Title = styled.h2`
  margin: 0 0 20px 0;
  color: ${variables.glow10Color};
  font-size: 20px;
  font-weight: normal;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  padding: 0;
  border: none;
  background: none;
  color: ${variables.text20Color};
  cursor: pointer;

  &:hover {
    color: ${variables.glow20Color};
  }
`

export const Messenger = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding: 12px 16px;
  border-radius: 25px;
  background: ${variables.glow10Color};
  color: ${variables.blue20Color};
  font-weight: bold;

  &:hover {
    background: ${variables.glow20Color};
  }
`

export const Note = styled.p`
  margin: 18px 0 0 0;
  color: ${variables.text20Color};
  font-size: 14px;
`
