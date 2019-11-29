import React from 'react';
import { connect } from 'react-redux';
import Court from '../components/Court';
import { setClayCourts } from '../actions';

const mapStateToProps = state => ({
  courts: state.courts,
});

const mapDispatchToProps = dispatch => ({
  setClayCourts: clayCourts => dispatch(setClayCourts(clayCourts)),
});

const clayCourtsList = ({ courts, setClayCourts }) => {
  const clayCourts = courts.filter(court => court.court_type === 'Clay Courts');

  setClayCourts(clayCourts);

  return (
    <section>
      <div>
        {clayCourts.map(court => (
          <Court key={court.id} court={court} />
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(clayCourtsList);
