import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ greeting }) => {
  return <>Greeting: {greeting}</>;
};

HelloWorld.propTypes = {
  greeting: PropTypes.string.isRequired,
};
export default HelloWorld;
