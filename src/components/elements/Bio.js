import React from 'react'
import styled from 'styled-components'
import { btnStyles, SecondaryTitle, Tag } from './reUsable'
import AboutPicture from './AboutPicture'

const StyledBio = styled.div`
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  .text-container {
    width: 100%;
    max-width: 35rem;
  }
  .bio__text {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .bio__btn {
    ${btnStyles}
    display: inline-block;
  }
`

const Bio = () => (
  <StyledBio>
    <div className="text-container">
      <Tag>About me</Tag>
      <SecondaryTitle>Who Am I</SecondaryTitle>
      <p className="bio__text">
        I&rsquo;m a self taught Front-End Developer based in Liverpool, UK.
        I&rsquo;m highly motivated to continuously improve my skills and to grow
        professionally. My primary focus is Front-End Development currently, but
        I&rsquo;m always happy to learn new technologies .
      </p>
      <a href="./Jozsef-Vass_resume.pdf" className="bio__btn" download>
        Resume
      </a>
    </div>
    <AboutPicture />
  </StyledBio>
)

export default Bio
