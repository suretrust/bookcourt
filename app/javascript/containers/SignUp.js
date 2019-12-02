import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Axios from 'axios';
import {
  setUser,
  setCourts,
  setCarpetCourts,
  setClayCourts,
  setHardCourts,
  setGrassCourts,
  setIndoorCourts,
} from '../actions';
import { emailIsValid } from '../utilities';

const csrfToken = document.querySelector('[name=csrf-token]').content;
Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const mapDispatchToProps = dispatch => ({
  setUser: (email, id) => dispatch(setUser(email, id)),
  setCourts: courts => dispatch(setCourts(courts)),
  setCarpetCourts: carpetCourts => dispatch(setCarpetCourts(carpetCourts)),
  setClayCourts: clayCourts => dispatch(setClayCourts(clayCourts)),
  setHardCourts: hardCourts => dispatch(setHardCourts(hardCourts)),
  setGrassCourts: grassCourts => dispatch(setGrassCourts(grassCourts)),
  setIndoorCourts: indoorCourts => dispatch(setIndoorCourts(indoorCourts)),
});

class SignUp extends React.Component {
  state = {
    email: '',
    errMsg: '',
    redirectTo: false,
    disabled: true,
  };

  handleEmailChange = e => {
    const { value } = e.target;
    if (emailIsValid(value)) {
      this.setState({
        errMsg: '',
        disabled: false,
      });
    } else {
      this.setState({
        errMsg: 'Please enter a valid email.',
        disabled: true,
      });
    }
    this.setState({
      email: value,
    });
  };

  getCourts = async () => {
    const courts = await Axios.get('api/v1/courts')
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
    return courts;
  };

  processUser = async email => {
    const user = await Axios.get('/api/v1/users')
      .then(res => res.data.find(user => user.email === email))
      .catch(err => err);
    return user;
  };

  addUserToDatabase = async email => {
    const id = await Axios.post('/api/v1/users', { email })
      .then(res => res.data)
      .catch(err => err);
    return id;
  };

  getUserID = async email => {
    const user = await this.processUser(email);
    if (user) return user;
    return this.addUserToDatabase(email);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email } = this.state;
    const {
      setUser,
      setCourts,
      setCarpetCourts,
      setClayCourts,
      setHardCourts,
      setGrassCourts,
      setIndoorCourts,
    } = this.props;
    const user = await this.getUserID(email.toLowerCase());
    const courts = await this.getCourts();

    const carpetCourts = courts.filter(
      court => court.court_type === 'Carpet Courts'
    );

    const clayCourts = courts.filter(
      court => court.court_type === 'Clay Courts'
    );

    const hardCourts = courts.filter(
      court => court.court_type === 'Hard Courts'
    );

    const grassCourts = courts.filter(
      court => court.court_type === 'Grass Courts'
    );

    const indoorCourts = courts.filter(
      court => court.court_type === 'Indoor Courts'
    );

    setCourts(courts);
    setCarpetCourts(carpetCourts);
    setClayCourts(clayCourts);
    setHardCourts(hardCourts);
    setGrassCourts(grassCourts);
    setIndoorCourts(indoorCourts);
    setUser(user);

    this.setState({
      errMsg: '',
      disabled: true,
      email: '',
      redirectTo: true,
    });
  };

  render() {
    const { handleEmailChange, handleSubmit } = this;
    const { errMsg, email, redirectTo, disabled } = this.state;

    return (
      <section>
        <div>
          {redirectTo ? <Redirect to="/court-types" /> : null}
          <h1>WELCOME</h1>
          <p>Enter your email to Sign Up</p>
        </div>
        <form
          onSubmit={
            emailIsValid(email) ? handleSubmit : e => e.preventDefault()
          }
          noValidate
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
          />
          <small>{errMsg}</small>
          <button type="submit" disabled={disabled}>
            Continue
          </button>
        </form>
      </section>
    );
  }
}

SignUp.propTypes = {
  setCourts: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setCarpetCourts: PropTypes.func.isRequired,
  setClayCourts: PropTypes.func.isRequired,
  setHardCourts: PropTypes.func.isRequired,
  setGrassCourts: PropTypes.func.isRequired,
  setIndoorCourts: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
