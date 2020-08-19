import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledList = styled.ul`
  li {
    list-style-type: none;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`

const CategoryList = ({ list }) => {
  return (
    <StyledList>
      {list.map(item => {
        return <li key={item}>{item}</li>
      })}
    </StyledList>
  )
}

CategoryList.propTypes = {
  list: PropTypes.array,
}

export default CategoryList
