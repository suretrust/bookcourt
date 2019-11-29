import React from 'react';
import { Link } from 'react-router-dom';
import { COURT_TYPES } from '../utilities/index';
import camelCase from '../utilities/camelCase';
import urlCase from '../utilities/urlCase';

class CourtTypes extends React.Component {
  handleClick = e => {
    const { value } = e.target;
  };

  render() {
    const { handleClick } = this;

    return (
      <section>
        <h2>Choose your prefered court type</h2>
        {COURT_TYPES.map(courtType => (
          <Link
            onClick={handleClick}
            value={camelCase(courtType)}
            key={courtType}
            to={`/court-types/${urlCase(courtType)}`}
          >
            {courtType}
          </Link>
        ))}
      </section>
    );
  }
}

export default CourtTypes;
