import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Court from '../components/Court';
import NavBar from '../components/NavBar';
import MobileFooter from '../components/MobileFooter';

const mapStateToProps = state => ({
  user: state.user,
  courts: state.courts,
});

const CourtsList = ({ user, match, courts }) => {
  const courtFilter = () => {
    switch (match.params.type) {
      case 'clay-courts':
        return courts.filter(court => court.court_type === 'Clay Courts');

      case 'hard-courts':
        return courts.filter(court => court.court_type === 'Hard Courts');

      case 'carpet-courts':
        return courts.filter(court => court.court_type === 'Carpet Courts');

      case 'grass-courts':
        return courts.filter(court => court.court_type === 'Grass Courts');

      case 'indoor-courts':
        return courts.filter(court => court.court_type === 'Indoor Courts');

      default:
        return courts;
    }
  };

  return (
    <main style={{ backgroundColor: '#e2f0d3' }}>
      {!user.id ? <Redirect to="/sign-up" /> : null}
      <NavBar />
      <div className="text-center px-5 pb-5 CourtList">
        <h2 className="bold pt-4 pb-1 green">
          {match.params.type === 'all-courts'
            ? 'All Courts'
            : courtFilter()[0].court_type}
        </h2>
        <Row className="row">
          {courtFilter().map(court => (
            <Col
              key={court.id}
              lg={6}
              md={6}
              sm={12}
              className="Court my-3 py-3"
            >
              <Court court={court} />
            </Col>
          ))}
        </Row>
      </div>
      <MobileFooter />
    </main>
  );
};

CourtsList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.node,
    }).isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  courts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(withRouter(CourtsList));
