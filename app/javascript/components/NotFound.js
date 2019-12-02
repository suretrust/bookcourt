import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotFound = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  const handleClick = () => {
    goBack();
  };

  return (
    <div>
      <h3>Whoops! Page not found</h3>
      <button onClick={handleClick} type="button">
        Go Back
      </button>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFound;
