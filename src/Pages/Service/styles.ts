import styled from 'styled-components'
import { variables } from '../../styles'

export const Article = styled.article`
  color: ${variables.text10Color};
  margin: 60px 0 120px 13%;
  max-width: 820px;
  line-height: 24px;

  @media (max-width: 768px) {
    margin: 30px 16px 80px 16px;
  }
`

export const Title = styled.h1`
  color: ${variables.glow10Color};
  font-family: var(--font-display), Roboto, serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  margin: 0 0 20px 0;

  .locale-ru & {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;

    .locale-ru & {
      font-size: 16px;
    }
  }
`

export const Lead = styled.p`
  color: ${variables.text20Color};
  margin: 0 0 30px 0;
`

export const SectionTitle = styled.h2`
  color: ${variables.glow20Color};
  font-size: 20px;
  font-weight: normal;
  margin: 35px 0 12px 0;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > li {
    position: relative;
    padding-left: 24px;
    margin: 8px 0;
  }

  > li::before {
    content: '>';
    position: absolute;
    left: 0;
    color: ${variables.glow10Color};
  }
`

export const Question = styled.h3`
  color: ${variables.text10Color};
  font-size: 17px;
  font-weight: normal;
  margin: 18px 0 4px 0;
`

export const Answer = styled.p`
  color: ${variables.text20Color};
  margin: 0;
`

export const Cta = styled.section`
  margin-top: 45px;
  padding: 20px;
  border: 1px solid ${variables.blue40Color};
  border-radius: 5px;
  background: ${variables.blue30Color};

  > h2 {
    margin-top: 0;
  }
`

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  color: ${variables.text20Color};

  &:hover {
    color: ${variables.glow20Color};
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin: 10px 0 10px 0;
`

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${variables.blue40Color};
  border-radius: 5px;
  background: ${variables.blue30Color};
  color: ${variables.text20Color};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${variables.glow20Color};
  }

  > h2, > h3 {
    margin-top: 0;
  }

  > p {
    flex: 1;
    margin: 0 0 15px 0;
  }

  > span {
    color: ${variables.glow20Color};
  }
`

export const Reviews = styled.p`
  margin: -10px 0 20px 0;
  color: ${variables.text20Color};

  a {
    color: ${variables.glow20Color};
    text-decoration: underline;
  }
`
