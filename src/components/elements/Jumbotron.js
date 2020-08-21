import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { btnStyles, Title, Highlight } from './reUsable'
import hero from '../../images/hero.svg'

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
    display: inline-block;
    cursor: pointer;
  }
  .img-wrapper {
    width: 30rem;
    margin: 0 auto;
    position: relative;
  }
  .hero {
    width: 100%;
    margin-top: 5rem;
  }

  @media ${({ theme }) => theme.mq.tab} {
    .intro {
      margin-bottom: 1rem;
    }
  }
  @media ${({ theme }) => theme.mq.medium} {
    text-align: left;
    .content {
      display: flex;
      justify-content: space-between;
    }
    .subtitle {
      margin-bottom: 2rem;
      line-height: 1.8;
    }
    .img-wrapper {
      width: 35rem;
      margin: 0;
    }
    .bg {
      position: absolute;
      z-index: -1;
      bottom: 28rem;
      left: -22rem;
      width: 140rem;
      height: 30rem;
      transform: rotate(-45deg);
      border-radius: 300px;
      box-shadow: -5px 5px 8px rgba(0, 0, 0, 0.5);
      background-color: var(--clr-bg-light);
    }
  }
  @media ${({ theme }) => theme.mq.large} {
    .img-wrapper {
      width: 52vw;
      max-width: 45rem;
    }
  }
  @media ${({ theme }) => theme.mq.ultra} {
    .img-wrapper {
      max-width: 55rem;
    }
    .bg {
      height: 37rem;
    }
  }
`

const Jumbotron = () => (
  <StyledJmubotron>
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
        <Link to="portfolio" smooth={true} offset={-100} className="btn">
          Check Out My Work
        </Link>
      </div>
      <div className="col img-wrapper">
        <img src={hero} alt="" className="hero" />
        <div className="bg"></div>
      </div>
    </div>
  </StyledJmubotron>
)

export default Jumbotron
