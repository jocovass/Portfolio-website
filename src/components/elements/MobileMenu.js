import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
  background-color: var(--clr-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledNav = styled.nav`
  .nav__list {
    list-style-type: none;
    text-align: center;
  }
  .nav__link {
    font-size: 1.3rem;
    font-weight: 600;
    display: inline-block;
    padding: 0.9rem 2rem;
    margin-bottom: 2rem;
    &:hover,
    &:active {
      color: var(--clr-accent);
    }
  }
  .active {
    color: var(--clr-accent);
  }
`
const navItems = ['Home', 'About', 'Portfolio', 'Contact']
const MobileMenu = ({ clickHandler }) => (
  <Wrapper>
    <StyledNav>
      <ul className="nav__list">
        {navItems.map(item => {
          return (
            <li className="nav__item" key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                activeClass="active"
                className="nav__link"
                onClick={clickHandler}
              >
                {item}
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledNav>
  </Wrapper>
)

MobileMenu.propTypes = {
  clickHandler: PropTypes.func,
}

export default MobileMenu
