import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div>
      <h2>How Bookourt Works</h2>
      <div>
        <h3>Create an Account</h3>
        <h3>Search for a court</h3>
        <h3>Book court</h3>
      </div>
      <Link to="/sign-up">Get Started</Link>
    </div>
  );
};

export default HowItWorks;
