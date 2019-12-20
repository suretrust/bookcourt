import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Court = ({ court }) => {
  return (
    <section>
      <img src={court.image} alt="court-img" />
      <p className="bold mt-2">
        {`${court.name} `}
        <span className="badge badge-secondary">{`$${court.cost}`}</span>
      </p>
      <Link to={`/courts/${court.id}`} className="bolder green mb-2 small">
        VIEW COURT DETAILS
      </Link>
      <div className="mt-4">
        <a
          href={`tel:+${court.phone}`}
          className="px-3 py-2 border-radius bg-whitey btn green mr-2"
        >
          <small>Call</small>
        </a>
        <Link
          to={`/book-court/${court.id}`}
          className="px-3 py-2 border-radius bg-green btn border-0"
        >
          <small>Book Court</small>
        </Link>
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
