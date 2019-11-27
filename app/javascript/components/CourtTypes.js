import React from 'react';
import { Link } from 'react-router-dom';
import COURT_TYPES from '../utilities/index';

const CourtTypes = () => {
  return (
    <section>
      {COURT_TYPES.map(courtType => (
        <Link to="/court-types">{courtType}</Link>
      ))}
    </section>
  );
};

export default CourtTypes;
