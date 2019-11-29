import React from 'react';
import { Link } from 'react-router-dom';

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
      <button onClick={handleClick}>Go Back</button>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default NotFound;
