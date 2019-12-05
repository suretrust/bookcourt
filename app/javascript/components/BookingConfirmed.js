import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const BookingConfirmed = () => {
  return (
    <section
      style={{ backgroundColor: '#e2f0d3' }}
      className="d-flex flex-column text-center align-items-center full-height p-5"
    >
      <h2 className="green bold pt-5">Booking Confirmed!</h2>
      <Row className="p-5 text-center">
        <Col lg={12} className="my-3">
          <Link to="/court-types" className="type-btn">
            Book Another Court
          </Link>
        </Col>
        <Col lg={12} className="my-3">
          <Link to="/bookings" className="type-btn">
            Check Bookings
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default BookingConfirmed;
