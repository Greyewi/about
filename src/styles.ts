import styled, {createGlobalStyle} from 'styled-components'

interface IVariables {
    [property: string]: string
}

export const variables: IVariables = {
    blue10Color: '#111A20',
    blue20Color: '#1C2C35',
    blue30Color: '#243B4A',
    blue40Color: '#416883',
    blue50Color: '#5E8CA7',
    text10Color: '#ECF8FF',
    text20Color: '#C9E2F0',
    glow10Color: '#B0FBBC',
    glow20Color: '#82F9A1',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${variables.blue20Color};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: ${variables.text20Color}
  }
`;


export const H1 = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 142%;
  color: ${variables.text10Color};
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 134%;
  }
`

export const H2 = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: ${variables.text10Color};

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 29px;
  }
`

export const Typography = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  color: ${variables.text20Color};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

// The Calendly badge is portalled into #modal, outside <Layout>, so the
// next/font CSS variables set on Layout don't reach it. The font's real
// (hashed) family name is passed in from _app instead.
export const CalendlyBadgeFont = createGlobalStyle<{ $fontFamily: string }>`
  body .calendly-badge-widget .calendly-badge-content {
    font-family: ${({ $fontFamily }) => $fontFamily}, Roboto, sans-serif;
  }
`

export const Layout = styled.main`
  --font-display: var(--font-legend);
  --font-body: var(--font-mode-seven);

  &.locale-ru {
    --font-display: var(--font-press-start);
    --font-body: var(--font-bedstead);
  }

  display: flex;
  flex-direction: column;
  font-family: var(--font-body), Roboto, sans-serif;
`

export const WrapperInline = styled.div`
  display: flex;
  width: calc(100vw - 20%);
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: calc(100vw - 6%);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 20%);

  @media (max-width: 768px) {
    width: calc(100vw - 6%);
  }
`