import styled from 'styled-components'
import { variables } from '../../styles'

export const Byline = styled.p`
  margin: -10px 0 25px 0;
  font-size: 14px;
  color: ${variables.blue50Color};

  a {
    color: ${variables.text20Color};
    text-decoration: underline;
  }
`

export const Paragraph = styled.p`
  color: ${variables.text20Color};
  margin: 0 0 14px 0;
`

export const Steps = styled.ol`
  margin: 0 0 14px 0;
  padding-left: 28px;
  color: ${variables.text20Color};

  > li {
    margin: 8px 0;
  }

  > li::marker {
    color: ${variables.glow10Color};
  }
`

export const InlineCode = styled.code`
  padding: 1px 5px;
  border-radius: 3px;
  background: ${variables.blue20Color};
  color: ${variables.glow10Color};
  font-size: 0.92em;
  overflow-wrap: anywhere;
`

export const TextLink = styled.a`
  color: ${variables.text20Color};
  text-decoration: underline;

  &:hover {
    color: ${variables.glow20Color};
  }
`

export const CodeBlock = styled.pre`
  margin: 0 0 14px 0;
  padding: 12px 16px;
  border: 1px solid ${variables.blue30Color};
  border-radius: 5px;
  background: ${variables.blue20Color};
  color: ${variables.glow10Color};
  font-size: 14px;
  line-height: 22px;
  overflow-x: auto;
`

// Wide comparison tables scroll inside this box instead of stretching the page on phones.
export const TableScroll = styled.div`
  margin: 0 0 14px 0;
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  color: ${variables.text20Color};
  font-size: 15px;

  th, td {
    padding: 8px 12px;
    border: 1px solid ${variables.blue30Color};
    text-align: left;
    vertical-align: top;
  }

  th {
    color: ${variables.glow20Color};
    font-weight: normal;
    background: ${variables.blue20Color};
  }
`

export const TextLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > li {
    margin: 6px 0;
  }

  a {
    color: ${variables.text20Color};
    text-decoration: underline;
  }

  a:hover {
    color: ${variables.glow20Color};
  }
`
