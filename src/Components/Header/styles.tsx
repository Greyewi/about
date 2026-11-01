import styled from 'styled-components'
import {variables} from '../../styles'


export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${variables.blue10Color};
  width:100vw;
  align-items: center;
  height: 100px;

  @media print {
      display: none !important;
      
      * {
        display: none !important;
      }
  }
`

export const NavBar = styled.span`
  display: flex;
  width: calc(100% + 30px);
  max-width: 650px;
  justify-content: space-evenly;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: flex-end;
    > a {
      display: none;
    }
  }
`

export const ExpandedBtn = styled.div.attrs((props) => ({ onClick: props.onClick }))`
  display: none;
  flex-direction: column;
  width: 45px;
  height: 35px;
  cursor: pointer;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Line = styled.span`
  display: flex;
  flex-direction: column;
  width: 45px;
  height: 4px;
  background-color: ${variables.text20Color};
`

export const ExpandedArea = styled.nav.attrs((props) => ({ onClick: props.onClick }))`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 100px);
  position: fixed;
  background: cadetblue;
  left: ${(props:{expanded: boolean}) => props.expanded ? '0' : '-100'}vw;
  top: 100px;
  opacity: ${(props:{expanded: boolean}) => props.expanded ? '1' : '0'};
  transition-duration: 0.3s;
  z-index: ${(props:{expanded: boolean}) => props.expanded ? '101' : '-2'};
  align-items: center;

  > a {
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`

export const Logo = styled.div`
  width: 203px;

  /* Bedstead (the RU body font) has none of the kaomoji glyphs, so the
     fallbacks would differ per locale; pin it to the EN font. */
  > span:first-child {
    font-family: var(--font-mode-seven), Roboto, sans-serif;
  }

  @media (max-width: 768px) {
    width: 170px;
  }
`

// The table in the logo kaomoji. It is flipped by rotating the same glyphs
// rather than swapping in ┻━┻, so the upside-down table matches exactly.
// The figure stands to the right and throws the table left, so it turns
// counterclockwise (-180deg).
export const Table = styled.span`
  display: inline-block;
  /* Five hard frames (every 45°) instead of a smooth turn, 8-bit style. */
  transition: transform 0.4s steps(5, jump-none);

  ${Logo}:hover & {
    transform: translateY(0.45em) rotate(-180deg);
  }
`
