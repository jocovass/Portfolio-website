import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Highlight, btnStyles } from './reUsable'

const StyledBio = styled.div`
  .image-container {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin: 0 auto 2rem;
    position: relative;
  }
  .profile-pic {
    position: absolute;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5);
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
  .image-backdrop {
    display: block;
    position: absolute;
    top: 6px;
    left: 18px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--clr-accent);
  }
  .bio__text {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.4;
  }
  .bio__btn {
    ${btnStyles}
  }
`
const StyledImage = styled(Img)`
  object-fit: cover;
`

const Bio = () => {
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
    <StyledBio>
      <div className="image-container">
        <span className="image-backdrop"></span>
        <div className="profile-pic">
          <StyledImage
            fluid={data.file.childImageSharp.fluid}
            alt="Profile picture"
          />
        </div>
      </div>
      <p className="bio__text">
        I&rsquo;m a self taught <Highlight>Front-End Developer</Highlight> based
        in Liverpool, Uk.
        <br />
        I&rsquo;m highly motivated to continuously improve my skills and to grow
        professionally. My primary focus is Front-End Development currently, but
        I&rsquo;m always happy to learn new technologies .
      </p>
      <button className="bio__btn">Resume</button>
    </StyledBio>
  )
}

export default Bio
