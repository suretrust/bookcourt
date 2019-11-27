import React from 'react';
import PropTypes from 'prop-types';

const Court = ({ court }) => {
  return (
    <section>
      <div>
        <div>Thumbnail of court</div>
        <div>Share</div>
        <div>{court.courtType}</div>
        <div>{court.name}</div>
        <div>{court.location}</div>
        <div>{`₦ ${court.cost}`}</div>
        <button type="button">VIEW COURT DETAILS</button>
        <button type="button">Call</button>
        <button type="button">Book</button>
      </div>
    </section>
  );
};

Court.propTypes = {
  court: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    courtType: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
};

export default Court;
