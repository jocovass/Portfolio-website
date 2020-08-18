import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { btnStyles, Tag } from '../components/elements/reUsable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const StyledProject = styled.figure`
  width: 100%;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  .project-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4rem;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    flex-direction: column;
    justify-content: center;

    transform: scale(0);
    transition: 0.3s transform ease-in-out;
  }

  &:hover .project-info {
    transform: scale(1);
  }
  &:hover .project-pic {
    transition: 0.3s transform ease-in-out;
    transform: scale(1.2);
  }

  .project-links {
    width: 21rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`
const StyledImage = styled(Img)`
  transition: 0.3s transform ease-in-out;
`
const Btn = styled.a`
  ${btnStyles}
  display: inline-block;
  margin: 3rem 0 0;
  border-width: 1px;
`
const StyledIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 5px;
`

const Project = ({ item }) => {
  return (
    <StyledProject>
      <StyledImage
        className="project-pic"
        fluid={item.frontmatter.image.childImageSharp.fluid}
        alt={`${item.frontmatter.title} appplication picture`}
      />
      <figcaption className="project-info">
        <Tag>{item.frontmatter.title}</Tag>
        <div className="project-links">
          <Btn
            href={item.frontmatter.live}
            rel="noopener noreferrer"
            target="_blank"
          >
            <StyledIcon icon={faLink} /> Live
          </Btn>
          <Btn
            href={item.frontmatter.source}
            rel="noopener noreferrer"
            target="_blank"
          >
            <StyledIcon icon={faGithub} /> Code
          </Btn>
        </div>
      </figcaption>
    </StyledProject>
  )
}

Project.propTypes = {
  item: PropTypes.object,
}

export default Project
