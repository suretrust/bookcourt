import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import wideWorld from '../../assets/images/wide-world.png';
import payment from '../../assets/images/payment.png';
import tennis from '../../assets/images/tennis.png';

const WhyUS = () => {
  return (
    <section id="why-us" className="WhyUs">
      <h2 className="text-center py-5 bold green">Why Bookourt?</h2>
      <Row className="text-center">
        <Col lg md={12}>
          <h4 className="bolder">Consistency</h4>
          <img src={tennis} alt="tennis" />
          <p> Never miss a tennis workout.</p>
        </Col>
        <Col lg md={12}>
          <h4 className="bolder">No Extra Payment</h4>
          <img src={payment} alt="payment" />
          <p>You pay the exact fee charged by the tennis court.</p>
        </Col>
        <Col lg md={12}>
          <h4 className="bolder">Wide Varieties</h4>
          <img src={wideWorld} alt="Wide Varieties" />
          <p>Get easy and unrestricted access to any court listed with us.</p>
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

export default WhyUS;
