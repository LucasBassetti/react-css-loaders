import React from 'react';
import PropTypes from 'prop-types';
import ResizeSpin from './ResizeSpin';

const ResizeSpinLoader = props => (
  <ResizeSpin {...props} />
);

ResizeSpinLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

ResizeSpinLoader.defaultProps = {
  color: '#000',
  duration: 2,
  size: 11,
};

export default ResizeSpinLoader;
