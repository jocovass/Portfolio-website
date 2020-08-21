import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHamburger = styled.div`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  span {
    display: block;
    height: 2px;
    width: 2.3rem;
    border-radius: 5px;
    position: relative;
    background-color: ${({ menuOpen }) =>
      menuOpen ? 'transparent' : 'var(--clr-text)'};
    transform: ${({ menuOpen }) =>
      menuOpen ? 'translateX(-20px)' : 'translateX(0px)'};
    pointer-events: ${({ menuOpen }) => (menuOpen ? 'none' : 'auto')};
    transition: all 0.3s ease-in-out;
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--clr-text);
      border-radius: 5px;
      transition: transform 0.3s ease-in-out;
    }
    &::before {
      transform: ${({ menuOpen }) =>
        menuOpen
          ? 'translate(20px, 0px) rotate(45deg)'
          : 'translate(0px, -7px) rotate(0deg)'};
    }
    &::after {
      transform: ${({ menuOpen }) =>
        menuOpen
          ? 'translate(20px, 0px) rotate(-45deg)'
          : 'translate(0px, 7px) rotate(0deg)'};
    }
  }
  @media ${({ theme }) => theme.mq.medium} {
    display: none;
  }
`

const HamburgerBtn = ({ menuOpen, clickHandler }) => (
  <StyledHamburger
    menuOpen={menuOpen}
    onClick={clickHandler}
    aria-label="Open the menu"
  >
    <span aria-hidden="true" className="bar"></span>
  </StyledHamburger>
)

HamburgerBtn.propTypes = {
  menuOprn: PropTypes.bool,
  clickHandler: PropTypes.func,
}

export default HamburgerBtn
