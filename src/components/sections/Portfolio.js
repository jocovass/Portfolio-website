import React from 'react'
import styled from 'styled-components'
import { Container, SecondaryTitle, Tag } from '../elements/reUsable'
import Projects from '../elements/Projects'

const StyledPortfolio = styled.section`
  padding: 7rem 0;
  .subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
  }
  @media ${props => props.theme.mq.tab} {
    padding: 8vw 0;
  }
`

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Container>
        <Tag>Portfolio</Tag>
        <SecondaryTitle>Some of My Recent Works</SecondaryTitle>
        <Projects />
      </Container>
    </StyledPortfolio>
  )
}

export default Portfolio
