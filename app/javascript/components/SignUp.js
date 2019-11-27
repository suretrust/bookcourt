import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <form>
      <div>
        <h1>WELCOME</h1>
        <p>Sign up to continue</p>
      </div>
      <input type="email" placeholder="Enter your email address" />
      <input type="password" placeholder="Enter your password" />
      <input type="password" placeholder="Confirm password" />
      <div>
        <Link to="/find-court">Sign Up</Link>
        <span>Already have an account?</span>
        <Link to="/login">Sign In</Link>
      </div>
    </form>
  );
};

export default SignUp;
