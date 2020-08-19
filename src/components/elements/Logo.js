import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Logo = () => {
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
    <div style={{ width: '9rem', maxWidth: '100px' }}>
      <Img fluid={fluid} alt="Logo" />
    </div>
  )
}

export default React.memo(Logo)
