import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const UL = styled.ul`
  list-style-type: none;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  li {
    font-size: 2.5rem;
  }
  a {
    color: var(--clr-text);
    display: inline-block;
    padding: 0.5rem;
    transition: color 0.15s ease-in-out;

    &:hover {
      color: var(--clr-accent);
    }
  }
`

const SocialLinks = () => {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            email
            github
            linkedin
            codepen
          }
        }
      }
    }
  `)
  return (
    <UL>
      {Object.entries(social).map(el => {
        let icon
        let href
        switch (el[0]) {
          case 'email':
            icon = faEnvelope
            href = `mailto:${social.email}`
            break
          case 'github':
            icon = faGithub
            href = `https://github.com/${el[1]}`
            break
          case 'codepen':
            icon = faCodepen
            href = `https://codepen.com/${el[1]}`
            break
          case 'linkedin':
            icon = faLinkedin
            href = `https://linkedin.com/in/${el[1]}`
            break
          default:
            break
        }
        return (
          <li key={el[0]}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={el[0]}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        )
      })}
    </UL>
  )
}

export default SocialLinks
