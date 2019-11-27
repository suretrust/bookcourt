import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>BOOKOURT</h1>
      <h4>Book a tennis court from anywhere in the world! </h4>
      <Link to="/sign-up">Book Now</Link>
      <a href="#why-us">Learn More</a>
    </div>
  );
};

export default Main;
