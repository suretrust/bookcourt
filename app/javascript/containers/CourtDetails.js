import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import NavBar from '../components/NavBar';
import MobileFooter from '../components/MobileFooter';

const csrfToken = document.querySelector('[name=csrf-token]').content;
Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const mapStateToProps = state => ({
  courts: state.courts,
});

const CourtDetails = ({ match, courts }) => {
  const id = Number(match.params.id);
  const court = courts.filter(court => court.id === id)[0];

  return (
    <section
      style={{ backgroundColor: '#e2f0d3' }}
      className="text-center full-height"
    >
      <NavBar />
      <div className="CourtDetails pt-5">
        <h4 className="green bold">
          {`${court.name} `}
          <span className="badge badge-secondary">{`$${court.cost}`}</span>
        </h4>
        <img src={court.image} alt="court" />
        <div className="mt-2 mb-5 px-2">{court.location}</div>
        <div className="mt-3">
          <a
            href={`tel:+${court.phone}`}
            className="px-3 py-2 border-radius-left bg-clear green"
          >
            Call
          </a>
          <Link
            to={`/book-court/${court.id}`}
            className="px-3 py-2 border-radius-right bg-green"
          >
            Book Court
          </Link>
        </div>
      </div>
      <MobileFooter />
    </section>
  );
};

CourtDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  courts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(CourtDetails);
