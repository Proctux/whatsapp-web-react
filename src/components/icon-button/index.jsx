import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const IconButton = ({
  icon,
  ariaLabel,
  className,
  size,
  iconClassName,
  ...buttonProps
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={classnames(styles.button, styles[size], className)}
      {...buttonProps}
    >
      <svg viewBox={icon.viewBox} className={classnames(styles.icon, iconClassName)}>
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    </button>
  )
}

IconButton.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  ariaLabel: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    id: PropTypes.string,
    viewBox: PropTypes.string,
  }).isRequired
}

IconButton.defaultProps = {
  className: '',
  iconClassName: '',
  size: BUTTON_SIZES.MEDIUM
}

export default IconButton
