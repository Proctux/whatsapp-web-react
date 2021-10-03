import React from 'react';
import PropTypes from 'prop-types';

import {svgPropType} from 'utils/proptypes';

const Svg = ({icon, className}) => {
  return (
    <svg className={className} viewBox={icon.viewBox}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  );
};

Svg.propTypes = {
  icon: svgPropType.isRequired,
  className: PropTypes.string,
};

Svg.defaultProps = {
  className: '',
};

export default Svg;
