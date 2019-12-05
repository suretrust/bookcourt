import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmed = () => {
  return (
    <section
      style={{ backgroundColor: '#e2f0d3' }}
      className="d-flex flex-column text-center align-items-center full-height p-5"
    >
      <h2 className="green bold pt-5">Booking Confirmed!</h2>
      <div className="my-5">
        <Link to="/court-types" className="btn btn-outline-success mr-2">
          Book Another Court
        </Link>
        <Link to="/bookings" className="btn btn-success">
          Check Bookings
        </Link>
      </div>
    </section>
  );
};

export default BookingConfirmed;
