import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import NavBar from './NavBar';
import MobileFooter from './MobileFooter';

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
    <section
      style={{ backgroundColor: '#e2f0d3' }}
      className="text-center Bookings"
    >
      <NavBar />
      <div className="p-5 bookings">
        <h3 className="bold green">My Bookings</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.court_name}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <MobileFooter />
    </section>
  );
};

export default connect(mapStateToProps, null)(Bookings);
