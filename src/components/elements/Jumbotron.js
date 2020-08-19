import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, btnStyles, Title, Highlight } from './reUsable'

const StyledJmubotron = styled.div`
  margin-top: 3rem;
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
    position: relative;
  }

  @media ${({ theme }) => theme.mq.tab} {
    .intro {
      margin-bottom: 1rem;
    }
    .background {
      position: absolute;
      z-index: -1;
      right: -10%;
      width: 120%;
      height: 92%;
      background-color: var(--clr-bg-light);
      border-radius: 5px;
      box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    }
  }
  @media ${({ theme }) => theme.mq.medium} {
    text-align: left;
    .content {
      display: flex;
    }
    .background {
      width: 130%;
      right: 0;
    }
    .img-wrapper {
      width: 35rem;
      margin: 0;
      margin-left: auto;
    }
  }
  @media ${({ theme }) => theme.mq.large} {
    .background {
      width: 70vw;
      max-width: 900px;
    }
    .img-wrapper {
      width: 52vw;
      max-width: 57.5rem;
    }
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
          <div className="col intro">
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
            <div className="background"></div>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
      </Container>
    </StyledJmubotron>
  )
}

export default Jumbotron
