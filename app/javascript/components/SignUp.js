import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const SignUp = ({ addUser }) => {
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [toggle, setToggle] = useState({ display: 'none' });

  const handleEmailChange = e => {
    const { value } = e.target;
    if (emailIsValid(value)) {
      setErrMsg('Valid email! Click on continue once done!');
      setToggle({ display: 'block' });
      setColor('#009688');
    } else {
      setErrMsg('Please enter a valid email.');
      setToggle({ display: 'none' });
      setColor('#ff0000');
    }
    setEmail(value);
  };

  const addUserToDatabase = async data => {
    await Axios.post('/api/v1/users', { email: data })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    setErrMsg('');
    addUser(email);
    addUserToDatabase(email);
  };

  return (
    <form>
      <div>
        <h1>WELCOME</h1>
        <p>Enter your email to continue</p>
      </div>
      <p>{errMsg}</p>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <div>
        <Link to="/find-court" onClick={handleSubmit} style={toggle}>
          Continue
        </Link>
      </div>
    </form>
  );
};

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
