import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Logo = () => {
  let data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 115, quality: 75) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  console.log('LOGO💥')
  return (
    <div style={{ width: '8rem' }}>
      <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
    </div>
  )
}

export default React.memo(Logo)
