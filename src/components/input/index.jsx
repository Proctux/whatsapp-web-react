import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import {svgPropType} from 'utils/proptypes';

import styles from './styles.css';

const Input = ({
  hiddenLabel,
  label,
  id,
  className,
  startAdornment,
  endAdornment,
  type,
  placeholder,
  onChange,
  ...restProps
}) => {
  return (
    <div className={classnames(styles['input-wrapper'], className)}>
      <label
        className={classnames(
            styles.label,
            {[styles['hidden-label']]: hiddenLabel}
        )}
      >
        {label}
      </label>
      <div className={styles['input-container']}>
        {startAdornment && (
          <svg className={styles.icon} viewBox={startAdornment.viewBox}>
            <use xlinkHref={`#${startAdornment.id}`}/>
          </svg>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={styles.input}
          {...restProps}
        />
        {endAdornment && (
          <svg className={styles.icon} viewBox={endAdornment.viewBox}>
            <use xlinkHref={`#${endAdornment.id}`}/>
          </svg>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  hiddenLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  startAdornment: svgPropType,
  endAdornment: svgPropType,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  startAdornment: null,
  endAdornment: null,
  type: 'text',
  placeholder: '',
  onChange: () => {},
  hiddenLabel: false,
};

export default Input;
