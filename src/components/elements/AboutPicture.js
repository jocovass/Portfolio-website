import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledAboutPicture = styled.div`
  .image-container {
    width: 70%;
    height: 250px;
    border-radius: 5px;
    margin: 0 auto 2rem;
    position: relative;
  }
  .profile-pic {
    position: absolute;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  .image-backdrop {
    display: block;
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--clr-accent);
  }
`
const StyledImage = styled(Img)`
  object-fit: cover;
`

const AboutPicture = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "prof-pic.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <StyledAboutPicture>
      <div className="image-container">
        <span className="image-backdrop"></span>
        <div className="profile-pic">
          <StyledImage
            fluid={data.file.childImageSharp.fluid}
            alt="Profile picture"
          />
        </div>
      </div>
    </StyledAboutPicture>
  )
}

export default AboutPicture
