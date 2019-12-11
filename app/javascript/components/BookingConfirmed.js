import React from 'react';
import { Link } from 'react-router-dom';
import MobileFooter from './MobileFooter';

const BookingConfirmed = () => {
  return (
    <main style={{ backgroundColor: '#e2f0d3' }} className="full-height">
      <div className="d-flex flex-column text-center align-items-center p-5">
        <h2 className="green bold pt-5">Booking Confirmed!</h2>
        <div className="my-5">
          <Link to="/court-types" className="btn btn-outline-success mr-2 my-1">
            Book Another Court
          </Link>
          <Link to="/bookings" className="btn btn-success my-1">
            Check Bookings
          </Link>
        </div>
      </div>
      <MobileFooter />
    </main>
  );
};

export default BookingConfirmed;
