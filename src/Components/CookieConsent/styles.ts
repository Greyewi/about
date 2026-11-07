import styled from 'styled-components'
import { variables } from '../../styles'

// Bottom-left, so it never covers the floating "Message me" button on the right.
export const Box = styled.div`
  position: fixed;
  left: 20px;
  bottom: 15px;
  z-index: 150;
  max-width: 300px;
  padding: 14px 16px;
  border: 1px solid ${variables.blue40Color};
  border-radius: 5px;
  background: ${variables.blue30Color};
  color: ${variables.text20Color};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    left: ${variables.mobileGutter};
    /* Leave room for the floating contact button in the bottom-right corner. */
    right: auto;
    max-width: calc(100% - 2 * ${variables.mobileGutter} - 150px);
    min-width: 180px;
  }

  @media print {
    display: none;
  }
`

export const Text = styled.p`
  margin: 0 0 12px 0;
  font-size: 13px;
  line-height: 1.4;
`

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const Accept = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 25px;
  background: ${variables.glow10Color};
  color: ${variables.blue20Color};
  font-family: inherit;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${variables.glow20Color};
  }
`

export const Decline = styled.button`
  padding: 6px 14px;
  border: 1px solid ${variables.blue40Color};
  border-radius: 25px;
  background: none;
  color: ${variables.text20Color};
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    border-color: ${variables.glow20Color};
  }
`
