import React from 'react';
import { Link } from 'react-router-dom';
import { COURT_TYPES } from '../utilities/index';
import urlCase from '../utilities/urlCase';

const CourtTypes = () => {
  return (
    <section>
      <input type="text" placeholder="Search for a court" />
      <h2>Choose your prefered court type</h2>
      {COURT_TYPES.map(courtType => (
        <Link key={courtType} to={`/court-types/${urlCase(courtType)}`}>
          {courtType}
        </Link>
      ))}
    </section>
  );
};

export default CourtTypes;
