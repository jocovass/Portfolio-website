import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledCopy = styled.div`
  margin-top: 5rem;
  text-align: center;
  .logo {
    width: 10rem;
    margin: 0 auto 15px;
  }
  .copy {
    font-weight: 300;
    font-size: 1.2rem;
  }
`

const Copy = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 115, quality: 75) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledCopy>
      <div className="logo">
        <Img fluid={fluid} alt="logo" />
      </div>
      <p className="copy">Joco.codes &copy;2020</p>
    </StyledCopy>
  )
}

export default Copy
