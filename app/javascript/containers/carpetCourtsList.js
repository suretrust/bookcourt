import React from 'react';
import { connect } from 'react-redux';
import Court from '../components/Court';
import { setCarpetCourts } from '../actions';

const mapStateToProps = state => ({
  courts: state.courts,
});

const mapDispatchToProps = dispatch => ({
  setCarpetCourts: carpetCourts => dispatch(setCarpetCourts(carpetCourts)),
});

const carpetCourtsList = ({ courts, setCarpetCourts }) => {
  const carpetCourts = courts.filter(
    court => court.court_type === 'Carpet Courts'
  );

  setCarpetCourts(carpetCourts);

  return (
    <section>
      <div>
        {carpetCourts.map(court => (
          <Court key={court.id} court={court} />
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(carpetCourtsList);
