import React from 'react'
import styled from 'styled-components'
import { Container } from '../elements/reUsable'
import SocialLinks from '../elements/SocialLinks'
import Copy from '../elements/Copy'

const StyledFooter = styled.footer`
  padding: 7rem 0 3rem;
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <SocialLinks />
      <Copy />
    </Container>
  </StyledFooter>
)

export default Footer
