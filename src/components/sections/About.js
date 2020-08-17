import React from 'react'
import styled from 'styled-components'
import { Container, SecondaryTitle } from '../elements/reUsable'
import Bio from '../elements/Bio'
import Skills from '../elements/Skills'

const StyledAbout = styled.section`
  background-color: var(--clr-bg-light);
  padding: 7rem 0;
  text-align: center;
`

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SecondaryTitle>About me</SecondaryTitle>
        <Bio />
      </Container>
      <Skills />
    </StyledAbout>
  )
}

export default About
