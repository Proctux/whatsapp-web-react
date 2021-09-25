import PropTypes from 'prop-types';

export const svgPropType = PropTypes.shape({
  id: PropTypes.string,
  viewBox: PropTypes.string,
});

export const userPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  number: PropTypes.string,
  avatar: PropTypes.string,
  lastSeen: PropTypes.string,
  isFixed: PropTypes.bool,
  unReadMessage: PropTypes.number,
});
