import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, btnStyles, Title, Highlight } from './reUsable'

const StyledJmubotron = styled.div`
  text-align: center;
  .subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  .btn {
    ${btnStyles}
  }
  .img-wrapper {
    width: 30rem;
    margin: 0 auto;
  }
`

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "hero.png" }
        sourceInstanceName: { eq: "images" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <StyledJmubotron>
      <Container>
        <div className="content">
          <div className="col">
            <Title>
              Hi I&rsquo;m <Highlight>Joco</Highlight>
            </Title>
            <p className="subtitle">
              I&rsquo;m a Front-End Developer, who
              <br />
              creates high performante, responsive websites
            </p>
            <button className="btn">Check out my work</button>
          </div>
          <div className="col img-wrapper">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
      </Container>
    </StyledJmubotron>
  )
}

export default Jumbotron
