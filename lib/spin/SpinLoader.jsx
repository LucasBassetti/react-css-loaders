import React from 'react';
import PropTypes from 'prop-types';
import Spin from './Spin';

const SpinLoader = props => (
  <Spin {...props} />
);

SpinLoader.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

SpinLoader.defaultProps = {
  background: '#fff',
  color: '#000',
  duration: 1.4,
  size: 10,
};

export default SpinLoader;
