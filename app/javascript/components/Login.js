import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <form>
      <div>
        <h1>WELCOME</h1>
        <p>Login to continue</p>
      </div>
      <input type="email" placeholder="Enter your email address" />
      <input type="password" placeholder="Enter your password" />
      <div>
        <Link to="/find-court">Login</Link>
        <span>Don't have an account?</span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};
export default Login;
