import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Back from '../../assets/images/back.svg';
import Booking from '../../assets/images/calendar.svg';
import Home from '../../assets/images/home.svg';
import Courts from '../../assets/images/tennis-court.svg';

class MobileFooter extends React.Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleGoBack = e => {
    e.preventDefault();
    this.goBack();
  };

  render() {
    const { handleGoBack } = this;
    return (
      <nav className="d-block d-sm-none d-flex MobileFooter align-items-center">
        <button type="button" to="/" className="link" onClick={handleGoBack}>
          <img src={Back} alt="back" />
        </button>
        <Link to="/court-types" className="link">
          <img src={Home} alt="home" />
        </Link>
        <Link to="/bookings" className="link">
          <img src={Booking} alt="booking" />
        </Link>
        <Link to="/court-types/all-courts" className="link">
          <img src={Courts} alt="courts" />
        </Link>
      </nav>
    );
  }
}

MobileFooter.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(MobileFooter);
