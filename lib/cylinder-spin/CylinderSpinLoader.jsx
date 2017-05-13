import React from 'react';
import PropTypes from 'prop-types';
import CylinderSpin from './CylinderSpin';

const CylinderSpinLoader = props => (
  <CylinderSpin {...props} />
);

CylinderSpinLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

CylinderSpinLoader.defaultProps = {
  color: '#000',
  duration: 1.1,
  size: 25,
};

export default CylinderSpinLoader;
