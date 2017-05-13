import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';

const BarLoader = props => (
  <Bar {...props} />
);

BarLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

BarLoader.defaultProps = {
  color: '#000',
  duration: 1,
  size: 11,
};

export default BarLoader;
