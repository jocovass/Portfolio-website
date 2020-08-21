import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
  @media ${props => props.theme.mq.tab} {
    padding: 6vw 0;
  }
`
const Btn = styled.a`
  ${btnStyles}
  display: inline-block;
  margin-top: 3rem;
  margin-bottom: 0;
`
const CtaContainer = styled(Container)`
  max-width: 600px;
  margin: 0 auto;
`

const Cta = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            email
          }
        }
      }
    }
  `)
  return (
    <StyledCta id="contact">
      <CtaContainer>
        <p className="cta-text">
          If you like what you see don&rsquo;t hesitate to get in touch!
        </p>
        <Btn href={`mailto:${data.site.siteMetadata.social.email}`}>
          Get in touch
        </Btn>
      </CtaContainer>
    </StyledCta>
  )
}

export default Cta
