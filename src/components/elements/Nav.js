import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledNav = styled.nav`
  .nav__list {
    list-style-type: none;
    text-align: center;
  }
  .nav__link {
    font-size: 1.6rem;
    font-weight: 600;
    display: inline-block;
    padding: 0.9rem 2rem;
    margin-bottom: 1rem;
    &:hover,
    &:active {
      color: var(--clr-accent);
    }
  }
`
const navItems = ['Home', 'About', 'Portfolio', 'Contact']

const Nav = ({ clickHandler }) => {
  return (
    <StyledNav>
      <ul className="nav__list">
        {navItems.map(item => {
          return (
            <li className="nav__item" key={item}>
              <a href="/" className="nav__link" onClick={clickHandler}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </StyledNav>
  )
}

Nav.propTypes = {
  clickHandler: PropTypes.func,
}

export default Nav
