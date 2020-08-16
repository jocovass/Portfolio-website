import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { Container, Flex } from './reUsable'
import Logo from './Logo'
import HamburgerBtn from './HamburgerBtn'
import MobileMenu from './MobileMenu'
import Nav from './Nav'

const StyledHeader = styled.header`
  padding: 1.1rem 0;
  &.fixed {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 15;
    transform: translateY(-200px);
    opacity: 0;
  }
  &.fadein {
    background-color: var(--clr-bg);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    transform: translateY(0px);
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.7s ease-in-out;
  }
  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms linear;
  }
  .slide-exit {
    transform: translateX(0);
    opacity: 1;
  }
  .slide-exit-active {
    transform: translateX(100%);
    opacity: 0;
    transition: all 200ms linear;
  }
`

const Header = ({ headerStyles }) => {
  // state and handler for Mobile Navigation
  const [menuOpen, setMenuOpen] = useState(false)
  const clickHandler = e => {
    e.preventDefault()
    setMenuOpen(prevState => !prevState)
  }
  return (
    <StyledHeader className={headerStyles}>
      <Container>
        <Flex>
          <Logo />
          <HamburgerBtn menuOpen={menuOpen} clickHandler={clickHandler} />
          <CSSTransition
            in={menuOpen}
            timeout={200}
            classNames="slide"
            unmountOnExit={true}
          >
            <MobileMenu>
              <Nav clickHandler={clickHandler} />
            </MobileMenu>
          </CSSTransition>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

Header.propTypes = {
  headerStyles: PropTypes.string,
}

export default Header
