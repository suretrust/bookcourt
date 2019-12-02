import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  user: state.user,
  courts: state.courts,
});

const BookCourt = ({ user, match, courts, history }) => {
  const id = Number(match.params.id);
  const court = courts.filter(court => court.id === id)[0];
  const today = new Date().toISOString().slice(0, 10);
  const openTimes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const [time, setTime] = useState('7:00');
  const [date, setDate] = useState(today);
  const [errMsg, setErrMsg] = useState('');
  const [disabled, setDisabled] = useState(true);

  const goBack = () => {
    history.goBack();
  };

  const handleSelectChange = e => {
    const { value } = e.target;
    setTime(value);
  };

  const handleDateChange = e => {
    const { value } = e.target;
    if (value < today) {
      setErrMsg('You can only choose today or a day in the future');
    } else {
      setErrMsg('');
    }
    setDate(value);
  };

  const handleGoBack = e => {
    e.preventDefault();
    goBack();
  };

  const handleBookNow = e => {
    e.preventDefault();
    alert('Court successfully booked!');
  };

  return (
    <section>
      <form>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={user.email}
            placeholder="Email Address"
            disabled
          />
        </label>
        <label htmlFor="name">
          Name of Court
          <input
            id="name"
            type="name"
            value={court.name}
            placeholder="Court name"
            disabled
          />
        </label>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="location"
            value={court.location}
            placeholder="Court Location"
            disabled
          />
        </label>
        <label htmlFor="cost">
          Amount
          <input
            id="cost"
            type="cost"
            value={`$${court.cost}`}
            placeholder="Amount"
            disabled
          />
        </label>
        <label htmlFor="time">
          Time
          <select onChange={handleSelectChange}>
            {openTimes.map(openTime => (
              <option
                key={openTime}
                value={`${openTime}:00 ${openTime > 11 ? `PM` : `AM`}`}
              >
                {`${openTime}:00 ${openTime > 11 ? `PM` : `AM`}` || time}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="date">
          Date
          {errMsg}
          <input
            id="date"
            type="date"
            value={date}
            placeholder="Date"
            onChange={handleDateChange}
          />
        </label>
        <button type="submit" onClick={handleGoBack}>
          Cancel
        </button>
        <button type="submit" onClick={handleBookNow} disabled={disabled}>
          Book Now
        </button>
      </form>
    </section>
  );
};

BookCourt.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  courts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(BookCourt);
