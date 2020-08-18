import React from 'react'
import styled from 'styled-components'
import { Container, btnStyles } from '../elements/reUsable'

const StyledCta = styled.section`
  background-color: var(--clr-bg-light);
  padding: 7rem 0;
  text-align: center;
  .cta-text {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
  }
`
const Btn = styled.a`
  ${btnStyles}
  display: inline-block;
  margin-top: 3rem;
  margin-bottom: 0;
`

const Cta = () => (
  <StyledCta>
    <Container>
      <p className="cta-text">
        If you like what you see don&rsquo;t hesitate to get in touch!
      </p>
      <Btn href="mailte:">Get in touch</Btn>
    </Container>
  </StyledCta>
)

export default Cta
