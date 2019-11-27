import React from 'react';
import { Link } from 'react-router-dom';
// import wideWorld from '../assets/images/wide-world.png';
// import payment from '../assets/images/payment.png';
// import tennis from '../assets/images/tennis.png';

const WhyUS = () => {
  return (
    <div id="why-us">
      <div>
        <h2>Consistency</h2>
        {/* <img src={tennis} alt="tennis" /> */}
        <p> Never miss a tennis workout.</p>
      </div>
      <div>
        <h2>No Extra Payment</h2>
        {/* <img src={payment} alt="payment" /> */}
        <p>You pay the exact fee charged by the tennis court.</p>
      </div>
      <div>
        <h2>Wide Varieties</h2>
        {/* <img src={wideWorld} alt="Wide Varieties" /> */}
        <p>Get easy and unrestricted access to any court listed with us.</p>
      </div>
      <Link to="/sign-up">Get Started</Link>
    </div>
  );
};

export default WhyUS;
