import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import notFound from '../images/404.svg'
import Layout from '../components/layout/Layout'
import { Title, Container, btnStyles } from '../components/elements/reUsable'
import Logo from '../components/elements/Logo'

const StyledError = styled.div`
  text-align: center;
  .error-header {
    padding: 1rem 0;
  }
  .error-main {
    margin-top: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error-subtitle {
    font-size: 1.8rem;
    font-weight: 300;
  }
  .img-container {
    width: 30rem;
    margin-top: 4rem;
  }
  .img {
    width: 100%;
    height: auto;
  }
  @media ${({ theme }) => theme.mq.medium} {
    .error-main {
      margin-top: 10rem;
    }
    .img-container {
      width: 40rem;
      margin-top: 7rem;
    }
  }
  @media ${({ theme }) => theme.mq.large} {
    .error-main {
      margin-top: 13rem;
    }
    .img-container {
      width: 45rem;
      margin-top: 11rem;
    }
  }
`
const StyledBtn = styled(Link)`
  ${btnStyles}
  margin-top: 6rem;
`

const ErrorPage = () => (
  <Layout>
    <Container>
      <StyledError>
        <header className="error-header">
          <Logo />
        </header>
        <main className="error-main">
          <Title>OOOPS!</Title>
          <p className="error-subtitle">
            The page you are looking for does not exist.
          </p>
          <div className="img-container">
            <img className="img" src={notFound} alt="Not found SVG" />
          </div>
          <StyledBtn to="/">Go Home</StyledBtn>
        </main>
      </StyledError>
    </Container>
  </Layout>
)

export default ErrorPage
