import React from 'react'
import styled from 'styled-components'
import Categories from '../../templates/Categories'

const StyledSkills = styled.div`
  width: 100%;
  max-width: 230px;
  margin: 2rem auto 0;
`

const Skills = () => (
  <StyledSkills>
    <Categories category="languages" />
    <Categories category="libraries" />
    <Categories category="tools" />
  </StyledSkills>
)

export default Skills
