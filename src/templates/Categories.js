import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFileCode, faCog } from '@fortawesome/free-solid-svg-icons'
import { TertiaryTitle, Highlight } from '../components/elements/reUsable'
import CategoryList from './CategoryList'

const StyledCategories = styled.div`
  padding: 3rem 1rem;
  background-color: var(--clr-bg);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  margin-right: 1rem;
`

const Categories = ({ category }) => {
  const skill = skillsTable[category]
  let icon = null
  if (skill.icon === 'Code') {
    icon = faCode
  } else if (skill.icon === 'FileCode') {
    icon = faFileCode
  } else if (skill.icon === 'Cog') {
    icon = faCog
  }
  return (
    <StyledCategories>
      <TertiaryTitle>
        <Highlight>
          <Icon icon={icon} />
        </Highlight>
        {'  '}
        {category}
      </TertiaryTitle>
      <CategoryList list={skill.list} />
    </StyledCategories>
  )
}

Categories.propTypes = {
  category: PropTypes.string,
}

const skillsTable = {
  languages: {
    icon: 'Code',
    list: ['HTML5', 'CSS3', 'JavaScript', 'GraphQL'],
  },
  libraries: {
    icon: 'FileCode',
    list: [
      'Bootstrap',
      'SCSS',
      'ReactJs',
      'GatsbyJS',
      'Styled Components',
      'Redux',
    ],
  },
  tools: {
    icon: 'Cog',
    list: ['Git', 'GitHub', 'WebPack', 'FireBase', 'AdobeXD', 'VSCode'],
  },
}

export default Categories
