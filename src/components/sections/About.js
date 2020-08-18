import React from 'react'
import styled from 'styled-components'
import { Container } from '../elements/reUsable'
import Bio from '../elements/Bio'
import Skills from '../elements/Skills'
import AboutPicture from '../elements/AboutPicture'

const StyledAbout = styled.section`
  background-color: var(--clr-bg-light);
  padding: 7rem 0 3rem;
`

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Bio />
        <AboutPicture />
        <Skills />
      </Container>
    </StyledAbout>
  )
}

export default About
