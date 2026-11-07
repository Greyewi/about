import styled from 'styled-components'
import {variables} from '../../styles'


// Mobile header is shorter: 100px took ~12% of a phone screen.
const HEADER_HEIGHT = '100px'
const HEADER_HEIGHT_MOBILE = '64px'

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${variables.blue10Color};
  width:100vw;
  align-items: center;
  height: ${HEADER_HEIGHT};

  @media (max-width: 768px) {
    height: ${HEADER_HEIGHT_MOBILE};
  }

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
    display: none;
  }
`

// 44x44 touch target around a 24px icon; the three lines fold into a cross
// while the menu is open.
export const ExpandedBtn = styled.button<{ $expanded: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  /* Pull the icon to the gutter edge so its lines, not the empty hit area,
     line up with the page content. */
  margin-right: -10px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  > span {
    transition: transform 0.2s, opacity 0.2s;
  }

  ${({ $expanded }) => $expanded && `
    > span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    > span:nth-child(2) { opacity: 0; }
    > span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  `}
`

export const Line = styled.span`
  display: block;
  width: 24px;
  height: 3px;
  background-color: ${variables.text20Color};
`

export const ExpandedArea = styled.nav<{ $expanded: boolean }>`
  display: none;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT_MOBILE});
  position: fixed;
  background: ${variables.blue10Color};
  border-top: 1px solid ${variables.blue30Color};
  left: ${({ $expanded }) => $expanded ? '0' : '-100'}vw;
  top: ${HEADER_HEIGHT_MOBILE};
  opacity: ${({ $expanded }) => $expanded ? '1' : '0'};
  transition-duration: 0.3s;
  z-index: ${({ $expanded }) => $expanded ? '101' : '-2'};
  padding-top: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
  }

  > a {
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 ${variables.mobileGutter};
  }

  > a > span {
    font-size: 20px;
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
