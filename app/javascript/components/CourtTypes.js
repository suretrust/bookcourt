import React from 'react';
import { Link } from 'react-router-dom';
import { COURT_TYPES } from '../utilities/index';

const CourtTypes = () => {
  return (
    <section>
      <h2>Choose your prefered court type</h2>
      {COURT_TYPES.map(courtType => (
        <Link key={courtType} to="/court-types">
          {courtType}
        </Link>
      ))}
    </section>
  );
};

export default CourtTypes;
