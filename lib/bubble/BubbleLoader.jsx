import React from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';

const BubbleLoader = props => (
  <Bubble {...props} />
);

BubbleLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
};

BubbleLoader.defaultProps = {
  color: '#000',
  duration: 1.8,
  size: 10,
};

export default BubbleLoader;
