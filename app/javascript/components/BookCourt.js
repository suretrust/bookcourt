import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
import NavBar from './NavBar';
import MobileFooter from './MobileFooter';

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

  async componentDidMount() {
    const invalidDates = await this.getInvalidDates();
    this.setState({ invalidDates });
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  getInvalidDates = async () => {
    const { match } = this.props;
    const { date } = this.state;
    const id = Number(match.params.id);
    const invalidDates = await Axios.get('/api/v1/bookings').then(res => {
      return res.data
        .filter(data => data.court_id === id && data.date === date)
        .map(res => res.time);
    });
    return invalidDates;
  };

  handleTimeChange = async e => {
    e.preventDefault();
    const { time, date } = this.state;
    if (time && date) this.setState({ fetchError: '' });
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
    const { time, date } = this.state;
    const { value } = e.target;
    const { today } = this;
    if (time && date) this.setState({ fetchError: '' });
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
    } else {
      this.setState({ fetchError: 'The date and time must be filled' });
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
      <section style={{ backgroundColor: '#e2f0d3' }} className="BookCourt">
        <NavBar />
        <div className="book-court p-5">
          {redirectTo ? <Redirect to="/booking-confirmed" /> : null}
          <h4 className="green text-center bold">Booking Form</h4>
          <div className="text-danger text-center">{fetchError}</div>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                value={user.email}
                placeholder="Email Address"
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="name">Name of Court</Form.Label>
              <Form.Control
                id="name"
                type="name"
                value={court.name}
                placeholder="Court name"
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="location">Location</Form.Label>
              <Form.Control
                id="location"
                type="location"
                value={court.location}
                placeholder="Court Location"
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="cost">Amount</Form.Label>
              <Form.Control
                id="cost"
                type="cost"
                value={`$${court.cost}`}
                placeholder="Amount"
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="date">Date</Form.Label>
              <Form.Control
                id="date"
                type="date"
                value={date}
                placeholder="Date"
                onChange={handleDateChange}
              />
              <small className="text-danger">{errMsg}</small>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="time">Time</Form.Label>
              <Form.Control
                as="select"
                onChange={handleTimeChange}
                value={time}
              >
                <option value="" disabled>
                  Choose available time
                </option>
                {openTimes.map(openTime => (
                  <option
                    key={openTime}
                    value={openTime}
                    disabled={invalidDates.includes(openTime)}
                  >
                    {openTime}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <button
              type="submit"
              onClick={handleGoBack}
              className="norm-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={disabled}
              className="focus-button ml-2"
            >
              Book Now
            </button>
          </Form>
        </div>
        <MobileFooter />
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
    id: PropTypes.number.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  courts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(withRouter(BookCourt));
