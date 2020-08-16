import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/GlobalStyles'
import theme from '../styles/theme'

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
