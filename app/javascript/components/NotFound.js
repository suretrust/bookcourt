import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3>Whoops! Page not found</h3>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default NotFound;
