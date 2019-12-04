import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import booking from '../../assets/images/booking.png';
import account from '../../assets/images/account.png';
import search from '../../assets/images/search.png';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="HowItWorks">
      <h2 className="text-center py-5 bold green">How Bookourt Works</h2>
      <Row className="text-center">
        <Col lg md={12}>
          <img src={account} alt="account" />
          <h4 className="bolder">Create an Account</h4>
        </Col>
        <Col lg md={12}>
          <img src={search} alt="search" />
          <h4 className="bolder">Search for a court</h4>
        </Col>
        <Col lg md={12}>
          <img src={booking} alt="booking" />
          <h4 className="bolder">Book court</h4>
        </Col>
      </Row>
      <div className="text-center my-5">
        <Link to="/sign-up" className="focus-button">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
