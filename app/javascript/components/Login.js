import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { setUser } from '../actions';
import { emailIsValid } from '../utilities';

const Login = () => {
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
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

  const addUserToDatabase = async data => {
    await Axios.get('/api/v1/users', { email: data })
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  };

  const handleSubmit = () => {
    setErrMsg('');
    setUser(email);
    addUserToDatabase(email);
  };

  return (
    <form>
      <div>
        <h1>Login Page</h1>
        <p>{errMsg}</p>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={handleEmailChange}
        />
      </div>
      <Link to="/court-types" onClick={handleSubmit} style={toggle}>
        Login
      </Link>
      <div>
        <span>Don't have an account?</span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};
export default Login;
