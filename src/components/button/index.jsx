import React, {useMemo} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {svgPropType} from 'utils/proptypes';

import styles from './styles.css';

export const BUTTON_THEMES = {
  TRANSPARENT: 'transparent',
  WHITE: 'white',
};

const Button = ({
  onClick,
  theme,
  to,
  children,
  startAdornment,
  endAdornment,
  iconClassName,
  className,
  ...restProps
}) => {
  const handleButtonProps = useMemo(
      () => ({
        onClick,
        className: classnames(styles.button, styles[theme], className),
        ...restProps,
      }),
      [className, restProps, onClick, theme],
  );

  const renderButtonContent = useMemo(
      () => (
      <>
        {startAdornment && (
          <svg
            className={classnames(styles.icon, iconClassName)}
            viewBox={startAdornment.viewBox}>
            <use xlinkHref={`#${startAdornment.id}`} />
          </svg>
        )}
        {children}
        {endAdornment && (
          <svg
            className={classnames(styles.icon, iconClassName)}
            viewBox={endAdornment.viewBox}>
            <use xlinkHref={`#${endAdornment.id}`} />
          </svg>
        )}
      </>
      ),
      [startAdornment, children, endAdornment, iconClassName],
  );

  if (to) {
    return <Link {...handleButtonProps}>{renderButtonContent}</Link>;
  }

  return (
    <button type="button" {...handleButtonProps}>
      {renderButtonContent}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  startAdornment: svgPropType,
  endAdornment: svgPropType,
  theme: PropTypes.oneOf(Object.values(BUTTON_THEMES)),
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

Button.defaultProps = {
  to: '',
  children: '',
  theme: BUTTON_THEMES.TRANSPARENT,
  className: '',
  iconClassName: '',
};

export default Button;
