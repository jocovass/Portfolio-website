import React from 'react'
import styled from 'styled-components'
import { Tag } from './reUsable'
import CategoryList from '../../templates/CategoryList'
import Categories from '../../templates/Categories'

const StyledSkills = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 4rem;
  background-color: var(--clr-bg);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  transform: translateY(35%);

  .skills {
    line-height: 1.6rem;
    font-size: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
  }
  .skill {
    display: inline-block;
    padding: 0.2rem 1rem;
  }
`

const skillsList = [
  'Html5',
  'Css3',
  'JavaScript',
  'GraphQL',
  'ReactJS',
  'GatsbyJS',
  'Redux',
  'Styled-Components',
  'Scss',
  'Bootstrap',
  'Git',
  'Github',
  'Firebase',
  'AdobeXD',
]

const Skills = () => (
  <StyledSkills>
    <Tag>Skills</Tag>
    {/* <p className="skills">
      {skillsList.map(skill => {
        return (
          <span className="skill" key={skill}>
            {skill}
          </span>
        )
      })}
    </p> */}
    {/* <Categories category="languages" /> */}
  </StyledSkills>
)

export default Skills
