import React from 'react'
import styled from 'styled-components'
import Categories from '../../templates/Categories'

const StyledSkills = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  @media ${({ theme }) => theme.mq.medium} {
    display: flex;
    justify-content: space-between;
  }
`

const Skills = () => (
  <StyledSkills>
    <Categories category="languages" />
    <Categories category="libraries" />
    <Categories category="tools" />
  </StyledSkills>
)

export default Skills
