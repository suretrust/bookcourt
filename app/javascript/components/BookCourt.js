import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

const csrfToken = document.querySelector('[name=csrf-token]').content;
Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const mapStateToProps = state => ({
  user: state.user,
  courts: state.courts,
});
class BookCourt extends React.Component {
  today = new Date().toISOString().slice(0, 10);

  state = {
    time: '',
    date: this.today,
    errMsg: '',
    fetchError: '',
    disabled: false,
    redirectTo: false,
    invalidDates: [],
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  getInvalidDates = async () => {
    const { match } = this.props;
    const id = Number(match.params.id);
    const invalidDates = await Axios.get('/api/v1/bookings').then(res => {
      return res.data
        .filter(data => data.court_id === id && data.date === this.state.date)
        .map(res => res.time);
    });
    return invalidDates;
  };

  async componentDidMount() {
    const invalidDates = await this.getInvalidDates();
    this.setState({ invalidDates });
  }

  handleTimeChange = async e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ time: value });
    try {
      const invalidDates = await this.getInvalidDates();
      this.setState({ invalidDates });
    } catch (error) {
      this.setState({ fetchError: error });
    }
  };

  handleDateChange = async e => {
    const { value } = e.target;
    const { today } = this;
    if (value < today) {
      this.setState({
        errMsg: 'You can only choose today or a day in the future',
        disabled: true,
      });
    } else {
      try {
        const invalidDates = await this.getInvalidDates();
        this.setState({ invalidDates });
      } catch (error) {
        this.setState({ fetchError: error });
      }
      this.setState({ errMsg: '', disabled: false });
    }
    this.setState({ date: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { time, date } = this.state;

    if (time && date) {
      try {
        this.createBookingInDb();
        this.setState({
          time: '',
          date: this.today,
          errMsg: '',
          redirectTo: true,
        });
      } catch (error) {
        this.setState({ fetchError: error });
      }
    }
  };

  createBookingInDb = async () => {
    const { user, match, courts } = this.props;
    const { time, date } = this.state;
    const id = Number(match.params.id);
    const court_name = courts.filter(court => court.id === id)[0].name;

    const params = {
      user: { email: user.email, id: user.id },
      booking: { court_id: id, date, time, court_name },
    };

    const res2 = await Axios.post('/api/v1/bookings', params).then(res => {
      return res;
    });
    return res2;
  };

  handleGoBack = e => {
    e.preventDefault();
    this.goBack();
  };

  render() {
    const {
      handleTimeChange,
      handleDateChange,
      handleGoBack,
      handleSubmit,
    } = this;
    const { user, match, courts } = this.props;
    const {
      time,
      date,
      errMsg,
      disabled,
      fetchError,
      redirectTo,
      invalidDates,
    } = this.state;

    const id = Number(match.params.id);
    const court = courts.filter(court => court.id === id)[0];
    const openTimes = [
      '7:00',
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
    ];

    return (
      <section>
        {redirectTo ? <Redirect to="/booking-confirmed" /> : null}
        <div>{fetchError}</div>
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
          <label htmlFor="time">
            Time
            <select onChange={handleTimeChange} value={time}>
              <option value="" disabled>
                Choose available time
              </option>
              {openTimes.map(openTime => (
                <option
                  key={openTime}
                  value={openTime}
                  disabled={invalidDates.includes(openTime) ? true : false}
                >
                  {openTime}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" onClick={handleGoBack}>
            Cancel
          </button>
          <button type="submit" onClick={handleSubmit} disabled={disabled}>
            Book Now
          </button>
        </form>
      </section>
    );
  }
}

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

export default connect(mapStateToProps, null)(withRouter(BookCourt));
