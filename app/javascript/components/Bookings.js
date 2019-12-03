import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});

const Bookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookingsFromDb();
  }, []);

  const getBookingsFromDb = async () => {
    await Axios.get('/api/v1/bookings').then(res => {
      const data = res.data.filter(data => data.user_id === user.id);
      setBookings(data);
    });
  };

  return (
    <section>
      <h2>My bookings</h2>
      <div>
        {bookings.map(booking => (
          <section key={booking.id}>
            <div>{booking.date}</div>
            <div>{booking.court_name}</div>
            <div>{booking.time}</div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, null)(Bookings);
