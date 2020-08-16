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

export const Title = styled.h1`
  font-size: 3.8rem;
  line-height: 1.2;
`

//BTN style
export const btnStyles = css`
  font-weight: 700;
  font-size: 1.2;
  padding: 0.6rem 1.5rem;
  margin: 2rem 0 3rem;
  border: 2px solid var(--clr-accent);
  background-color: transparent;
  border-radius: 50px;
  transition: 0.15s background ease-in-out;
  &:hover {
    background-color: var(--clr-accent);
  }
`
