import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Form } from 'react-bootstrap';
import Axios from 'axios';
import { setUser, setCourts } from '../actions';
import { emailIsValid } from '../utilities';

const csrfToken = document.querySelector('[name=csrf-token]').content;
Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const mapDispatchToProps = dispatch => ({
  setUser: (email, id) => dispatch(setUser(email, id)),
  setCourts: courts => dispatch(setCourts(courts)),
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
    const { setUser, setCourts } = this.props;
    const user = await this.getUserID(email.toLowerCase());
    const courts = await this.getCourts();

    setCourts(courts);
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
      <main className="SignUp text-center pt-5">
        <div className="container p-5">
          <h4 className="py-5 bold">
            BOOK<span className="green">OURT</span>
          </h4>
          <div>
            {redirectTo ? <Redirect to="/court-types" /> : null}
            <h3>WELCOME</h3>
            <p>Enter your email to continue</p>
          </div>
          <Form
            onSubmit={
              emailIsValid(email) ? handleSubmit : e => e.preventDefault()
            }
            noValidate
          >
            <Form.Group>
              <Form.Control
                className="input"
                name="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              <small className="text-danger">{errMsg}</small>
            </Form.Group>
            <div>
              <button
                type="submit"
                disabled={disabled}
                className="focus-button my-4"
              >
                Continue
              </button>
            </div>
          </Form>
        </div>
      </main>
    );
  }
}

SignUp.propTypes = {
  setCourts: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
