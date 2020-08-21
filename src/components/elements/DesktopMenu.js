import React from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.mq.medium} {
    display: block;
  }
`
const StyledNav = styled.nav`
  .nav__list {
    list-style-type: none;
    text-align: center;
    display: flex;
  }
  .nav__item {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  .nav__link {
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    display: inline-block;
    padding: 0.3rem 1rem;
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
const DesktopMenu = () => (
  <Wrapper>
    <StyledNav>
      <ul className="nav__list">
        {navItems.map(item => {
          return (
            <li className="nav__item" key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                offset={-100}
                className="nav__link"
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
function calcOffset() {
  if (typeof window !== 'undefined') {
    return -(window.innerHeight / 2)
  }
}

DesktopMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DesktopMenu
