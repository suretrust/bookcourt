import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

const csrfToken = document.querySelector('[name=csrf-token]').content;
Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const mapStateToProps = state => ({
  courts: state.courts,
});

const CourtDetails = ({ match, courts }) => {
  const id = Number(match.params.id);
  const court = courts.filter(court => court.id === id)[0];

  return (
    <section>
      <h2>{court.name}</h2>
      <img src={court.image} alt="court" />
      <div>${court.cost}</div>
      <a href={`tel:+${court.phone}`}>Call</a>
      <h3>Court's Info</h3>
      <div>{court.location}</div>
      <div>{court.phone}</div>
      <Link to={`/book-court/${court.id}`}>Book Court</Link>
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
