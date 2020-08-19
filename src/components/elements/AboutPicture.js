import React from 'react'
import styled from 'styled-components'
import gitSvg from '../../images/git.svg'

const StyledAboutPicture = styled.div`
  display: none;
  @media ${({ theme }) => theme.mq.medium} {
    display: block;
    width: 65vw;
    max-width: 75rem;
    position: absolute;
    right: -2.5rem;
    top: 8rem;
    z-index: -1;
    img {
      width: 100%;
    }
  }
  @media only screen and (min-width: 800px) {
    width: 55vw;
    top: 0rem;
  }
  @media ${({ theme }) => theme.mq.large} {
    width: 65vw;
    right: -5rem;
    top: -5rem;
  }
`

const AboutPicture = () => {
  return (
    <StyledAboutPicture>
      <img src={gitSvg} alt="svg" />
    </StyledAboutPicture>
  )
}

export default AboutPicture
