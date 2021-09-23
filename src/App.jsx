import React from 'react'
import PropTypes from 'prop-types'

import './styles/global.css'

const App = ({ children }) => {
  return <main>{children}</main>
}

App.propTypes = {
  children: PropTypes.node,
}

App.defaultProps = {
  children: null,
}

export default App
