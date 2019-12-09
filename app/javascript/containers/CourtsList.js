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
  carpetCourts: state.carpetCourts,
  clayCourts: state.clayCourts,
  indoorCourts: state.indoorCourts,
  grassCourts: state.grassCourts,
  hardCourts: state.hardCourts,
});

const CourtsList = ({
  user,
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
    <section style={{ backgroundColor: '#e2f0d3' }}>
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
    </section>
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
  clayCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  carpetCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  grassCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  hardCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
  indoorCourts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(withRouter(CourtsList));
