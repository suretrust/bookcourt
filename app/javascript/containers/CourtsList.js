import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Court from '../components/Court';

const mapStateToProps = state => ({
  courts: state.courts,
  carpetCourts: state.carpetCourts,
  clayCourts: state.clayCourts,
  indoorCourts: state.indoorCourts,
  grassCourts: state.grassCourts,
  hardCourts: state.hardCourts,
});

const CourtsList = ({
  match,
  courts,
  clayCourts,
  carpetCourts,
  grassCourts,
  hardCourts,
  indoorCourts,
}) => {
  const courtFilter = () => {
    switch (match.params.type) {
      case 'all-courts':
        return courts;

      case 'clay-courts':
        return clayCourts;

      case 'hard-courts':
        return hardCourts;

      case 'carpet-courts':
        return carpetCourts;

      case 'grass-courts':
        return grassCourts;

      case 'indoor-courts':
        return indoorCourts;

      default:
        return courts;
    }
  };

  return (
    <section>
      <input type="text" placeholder="Search for a court by name" />
      <button type="submit">Search</button>
      <div>
        {courtFilter().map(court => (
          <Court key={court.id} court={court} />
        ))}
      </div>
    </section>
  );
};

CourtsList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.node,
    }).isRequired,
  }).isRequired,
  courts: PropTypes.arrayOf(PropTypes.object).isRequired,
  clayCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  carpetCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  grassCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  hardCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  indoorCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(CourtsList);
