import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmed = () => {
  return (
    <section>
      <h2>Booking Confirmed!</h2>
      <Link to="/court-types">Book another court</Link>
      <Link to="/bookings">Check Bookings</Link>
    </section>
  );
};

export default BookingConfirmed;
