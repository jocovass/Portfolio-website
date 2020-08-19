import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Highlight = styled.span`
  color: var(--clr-accent);
  font-weight: 900;
`

// titles
export const Title = styled.h1`
  font-size: 3.8rem;
  line-height: 1.2;
  @media ${({ theme }) => theme.mq.large} {
    font-size: 5.5rem;
  }
`
export const Tag = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 5px;
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: var(--clr-accent);
    margin-right: 5px;
    margin-bottom: 4px;
  }
`

export const SecondaryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const TertiaryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
`

// BTN style
export const btnStyles = css`
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.7rem 2rem;
  margin: 2rem 0 3rem;
  border: 2px solid var(--clr-accent);
  background-color: transparent;
  border-radius: 50px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  transition: 0.15s background ease-in-out;
  &:hover {
    background-color: var(--clr-accent);
  }
`
