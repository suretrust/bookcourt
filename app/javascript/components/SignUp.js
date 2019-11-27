import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addUser from '../actions';

const mapDispatchToProps = dispatch => ({
  addUser: email => dispatch(addUser(email)),
});

const SignUp = ({ addUser }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    addUser(email);
  };

  return (
    <form>
      <div>
        <h1>WELCOME</h1>
        <p>Enter your email to continue</p>
      </div>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <div>
        <Link to="/find-court" onClick={handleSubmit}>
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
