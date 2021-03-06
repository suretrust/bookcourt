import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import MobileFooter from '../components/MobileFooter';

const mapStateToProps = state => ({
  user: state.user,
});

const Bookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const getBookingsFromDb = async () => {
    await Axios.get('/api/v1/bookings').then(res => {
      const data = res.data.filter(data => data.user_id === user.id);
      setBookings(data);
    });
  };

  useEffect(() => {
    getBookingsFromDb();
  }, []);

  return (
    <main
      style={{ backgroundColor: '#e2f0d3' }}
      className="text-center Bookings"
    >
      {!user.id ? <Redirect to="/sign-up" /> : null}
      <NavBar />
      <div className="p-5 bookings">
        <h3 className="bold green">My Bookings</h3>
        <Table striped bordered hover responsive>
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
    </main>
  );
};

Bookings.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(withRouter(Bookings));
