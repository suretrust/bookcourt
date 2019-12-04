import React from 'react';
import { Row, Col, Media, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TennisImg from '../../assets/images/tennis.svg';

const styles = {
  Img: {
    backgroundImage: `url(${TennisImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  Container: {
    height: '100%',
  },
  Row: {
    height: '100%',
  },
};

const Main = () => {
  return (
    <div className="Main" style={{ backgroundColor: '#e2f0d3' }}>
      <Container style={styles.Container}>
        <Row className="pt-5" style={styles.Row}>
          <Col lg md={12}>
            <h1 className="pt-5 bold">
              BOOK<span className="green">OURT</span>
            </h1>
            <h5 className="pb-5">
              Book a tennis court from anywhere in the world!
            </h5>
            <div className="mt-5 pt-5">
              <a href="#why-us" className="norm-button">
                Learn More
              </a>
              <Link to="/sign-up" className="focus-button ml-4">
                Book Now
              </Link>
            </div>
          </Col>
          <Col lg md style={styles.Img} className=""></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
