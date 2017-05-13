import React from 'react';
import PropTypes from 'prop-types';
import RotateSpin from './RotateSpin';

const RotateSpinLoader = props => (
  <RotateSpin {...props} />
);

RotateSpinLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

RotateSpinLoader.defaultProps = {
  color: '#000',
  duration: 1.1,
  size: 10,
};

export default RotateSpinLoader;
