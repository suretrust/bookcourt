import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Court from '../components/Court';
import CourtTypes from '../components/CourtTypes';
import store from '../store/store';

const mapStateToProps = state => ({
  courts: state.courts,
});

const CourtsList = ({ courts }) => {
  console.log(store.getState());

  return (
    <section>
      <input type="text" placeholder="Search for courts" />
      <h3>Filter by: </h3>
      <CourtTypes />
      <div>
        {courts.map(court => (
          <Court key={court.name} court={court} />
        ))}
      </div>
    </section>
  );
};

CourtsList.propTypes = {
  courts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      courtType: PropTypes.string.isRequired,
      courtDetails: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps, null)(CourtsList);
