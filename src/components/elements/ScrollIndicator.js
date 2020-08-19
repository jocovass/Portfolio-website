import React from 'react'
import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
    0% {
        opacity: 0;
        transform: translateY(2px);
    }
    30% {
        opacity: 1;
    }
    100% {
        transform: translateY(9px);
        opacity: 0;
    }
`

const Wrapper = styled.div`
  width: 17px;
  height: 25px;
  border: 2px solid var(--clr-text);
  border-radius: 50px;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  .wheel {
    display: block;
    width: 3px;
    height: 6px;
    border-radius: 45%;
    background-color: var(--clr-text);
    animation: ${scroll} 1.5s ease-in-out infinite;
  }
`

const ScrollIndicator = () => (
  <Wrapper>
    <span className="wheel"></span>
  </Wrapper>
)

export default ScrollIndicator
