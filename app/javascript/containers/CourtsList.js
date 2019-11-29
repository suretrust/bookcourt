import React from 'react';
import { connect } from 'react-redux';
import Court from '../components/Court';

const mapStateToProps = state => ({
  courts: state.courts,
});

const CourtsList = ({ courts }) => {
  return (
    <section>
      <input type="text" placeholder="Search for courts" />
      <div>
        {courts.map(court => (
          <Court key={court.id} court={court} />
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, null)(CourtsList);
