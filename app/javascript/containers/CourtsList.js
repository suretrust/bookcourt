import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Court from '../components/Court';
import CourtTypes from '../components/CourtTypes';

const mapStateToProps = state => ({
  courts: state.courts,
});

const CourtsList = () => {
  const [courts, setCourts] = useState([]);
  const [error, setError] = useState('');

  const getCourts = async () => {
    await axios
      .get('api/v1/courts')
      .then(res => {
        setCourts(res.data);
      })
      .catch(err => {
        setError(err);
      });
  };

  useEffect(() => {
    getCourts();
  }, []);

  return (
    <section>
      <input type="text" placeholder="Search for courts" />
      <CourtTypes />
      <div>
        {error ? `${error}` : ''}
        {courts.map(court => (
          <Court key={court.id} court={court} />
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, null)(CourtsList);
