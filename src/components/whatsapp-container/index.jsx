import React from 'react'
import PropTypes from 'prop-types'
import UserHeader from '../user-header'

const WhatsappContainer = ({ className }) => {
  return (
    <div className={className}>
      <UserHeader />
    </div>
  )
}

WhatsappContainer.propTypes = {
  className: PropTypes.string,
}

WhatsappContainer.defaultProps = {
  className: '',
}

export default WhatsappContainer
