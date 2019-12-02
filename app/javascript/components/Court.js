import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Court = ({ court }) => {
  return (
    <section>
      <div>
        <img src={court.image} alt="court-img" />
        <div>Share</div>
        <div>{court.court_type}</div>
        <div>{court.name}</div>
        <div>{court.location}</div>
        <div>{`$${court.cost}`}</div>
        <Link to={`/courts/${court.id}`}>VIEW COURT DETAILS</Link>
        <a href={`tel:+${court.phone}`}>Call</a>
        <Link to={`/book-court/${court.id}`}>Book Court</Link>
      </div>
    </section>
  );
};

Court.propTypes = {
  court: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    court_type: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Court;
