import React from 'react';
import PropTypes from 'prop-types';
import CometSpin from './CometSpin';

const CometSpinLoader = props => (
  <CometSpin {...props} />
);

CometSpinLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

CometSpinLoader.defaultProps = {
  color: '#000',
  duration: 1.7,
  size: 90,
};

export default CometSpinLoader;
