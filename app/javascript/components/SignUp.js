import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Axios from 'axios';
import { setUser, setCourts } from '../actions';
import { emailIsValid } from '../utilities';

const csrfToken = document.querySelector('[name=csrf-token]').content;
Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const mapDispatchToProps = dispatch => ({
  setUser: (email, id) => dispatch(setUser(email, id)),
  setCourts: courts => dispatch(setCourts(courts)),
});

const mapStateToProps = state => ({
  storeState: state,
});

class SignUp extends React.Component {
  state = {
    email: '',
    errMsg: '',
    redirectTo: false,
    toggle: { display: 'none' },
  };

  handleEmailChange = e => {
    const { value } = e.target;
    if (emailIsValid(value)) {
      this.setState({
        errMsg: '',
        toggle: { display: 'block' },
      });
    } else {
      this.setState({
        errMsg: 'Please enter a valid email.',
        toggle: { display: 'none' },
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
    const { setUser, setCourts } = this.props;
    const user = await this.getUserID(email);
    const courts = await this.getCourts();

    setCourts(courts);
    setUser(user);

    this.setState({
      errMsg: '',
      toggle: { display: 'none' },
      email: '',
      redirectTo: true,
    });
  };

  render() {
    const { handleEmailChange, handleSubmit } = this;
    const { errMsg, email, toggle, redirectTo } = this.state;

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
          <button type="submit" style={toggle}>
            Continue
          </button>
        </form>
      </section>
    );
  }
}

SignUp.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
