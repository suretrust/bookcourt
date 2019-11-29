import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';
import addUser from '../actions';
import { emailIsValid } from '../utilities';

const csrfToken = document.querySelector('[name=csrf-token]').content;
Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const mapDispatchToProps = dispatch => ({
  addUser: email => dispatch(addUser(email)),
});

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [userId, setUserID] = useState(null);
  const [toggle, setToggle] = useState({ display: 'none' });

  const handleEmailChange = e => {
    const { value } = e.target;
    if (emailIsValid(value)) {
      setErrMsg('');
      setToggle({ display: 'block' });
    } else {
      setErrMsg('Please enter a valid email.');
      setToggle({ display: 'none' });
    }
    setEmail(value);
  };

  const userIsInDatabase = async data => {
    await Axios.get('/api/v1/users')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addUserToDatabase = async data => {
    await Axios.post('/api/v1/users', { email: data })
      .then(res => {
        const userID = res.data.id;
        setUserID(userID);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrMsg('');
    setToggle({ display: 'none' });
    addUser(email);
    userIsInDatabase(email);
    addUserToDatabase(email);
    setEmail('');
  };

  return (
    <section>
      <div>
        <h1>WELCOME</h1>
        <p>Enter your email to Sign Up</p>
      </div>
      <p>{errMsg}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" style={toggle}>
          Continue
        </button>
      </form>
    </section>
  );
};

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
