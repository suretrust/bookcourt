import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import NotFoundImg from '../../assets/images/not-found.svg';

const NotFound = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  const handleClick = () => {
    goBack();
  };

  return (
    <main
      className="NotFound text-center"
      style={{ backgroundColor: '#e2f0d3' }}
    >
      <NavBar />
      <div className="mt-5 p-2">
        <h3 className="bold">Whoops! Page not found</h3>
        <img src={NotFoundImg} alt="not-found" className="m-5" />
        <div>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-outline-success mr-1"
          >
            Go Back
          </button>
          <Link to="/" className="btn btn-success">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
};

NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFound;
