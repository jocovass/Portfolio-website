import React from 'react'
import styled from 'styled-components'
import { Container } from '../elements/reUsable'
import Bio from '../elements/Bio'
import Skills from '../elements/Skills'

const StyledAbout = styled.section`
  background-color: var(--clr-bg-light);
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
  z-index: -2;
  @media ${props => props.theme.mq.tab} {
    padding: 8vw 0;
  }
`

const About = () => (
  <StyledAbout id="about">
    <Container>
      <Bio />
      <Skills />
    </Container>
  </StyledAbout>
)

export default About
