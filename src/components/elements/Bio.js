import React from 'react'
import styled from 'styled-components'
import { btnStyles, SecondaryTitle, Tag } from './reUsable'

const StyledBio = styled.div`
  margin-bottom: 5rem;
  .bio__text {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .bio__btn {
    ${btnStyles}
  }
`

const Bio = () => (
  <StyledBio>
    <div className="text-container">
      <Tag>About me</Tag>
      <SecondaryTitle>Who Am I</SecondaryTitle>
      <p className="bio__text">
        I&rsquo;m a self taught Front-End Developer based in Liverpool, Uk.
        I&rsquo;m highly motivated to continuously improve my skills and to grow
        professionally. My primary focus is Front-End Development currently, but
        I&rsquo;m always happy to learn new technologies .
      </p>
      <button className="bio__btn">Resume</button>
    </div>
  </StyledBio>
)

export default Bio
