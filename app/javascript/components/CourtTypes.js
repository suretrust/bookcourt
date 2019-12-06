import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import SearchResult from './SearchResult';
import MobileFooter from './MobileFooter';

const CourtTypes = () => {
  const [input, setInput] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [courts, setCourts] = useState({});
  const [notFound, setNotfound] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
    setCourts({});
    setNotfound('');
    if (input !== '') {
      setErrMsg('');
    }
  };

  const getCourts = async () => {
    const courts = await Axios.get('api/v1/courts')
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
    return courts;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (input === '') {
      setErrMsg('You must enter a court name');
    } else {
      const courtsDb = await getCourts();
      const filteredCourts = courtsDb.filter(court =>
        court.name.toLowerCase().includes(input)
      );
      if (!filteredCourts[0]) {
        setNotfound('Sorry, court not found!');
      } else {
        setCourts(filteredCourts);
      }
    }
  };

  return (
    <section
      style={{ backgroundColor: '#e2f0d3' }}
      className="CourtTypes text-center"
    >
      <NavBar />
      <div className="container p-5">
        <h6 className="text-danger">{notFound}</h6>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col lg={9} md={9} sm={9} xs={8}>
              <Form.Control
                onChange={handleChange}
                className="input"
                value={input}
                name="search"
                type="text"
                placeholder="Search by name"
              />
              <small className="text-danger">{errMsg}</small>
            </Col>
            <Col lg={3} md={3} sm={3} xs={4}>
              <Button
                type="submit"
                variant="light"
                className="btn btn-outline-success btn-block"
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <h6 className="mt-3 bold">SEARCH COURTS</h6>
        <small>
          Search by directly typing the court's name above. You can also search
          by the court types listed below.
        </small>
        <Row className="my-2">
          <Col lg={12} className="min-height">
            <Row className="full-height mb-2">
              <Col>
                <Link
                  key="All Courts"
                  className="court-type-link btn btn-outline-success btn-block"
                  to="/court-types/all-courts"
                >
                  <small>All Courts</small>
                </Link>
              </Col>
              <Col>
                <Link
                  key="Carpet Courts"
                  className="court-type-link btn btn-outline-success btn-block"
                  to="/court-types/carpet-courts"
                >
                  <small>Carpet Courts</small>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={12} className="min-height">
            <Row className="full-height mb-2">
              <Col>
                <Link
                  key="Clay Courts"
                  className="court-type-link btn btn-outline-success btn-block"
                  to="/court-types/clay-courts"
                >
                  <small>Clay Courts</small>
                </Link>
              </Col>
              <Col>
                <Link
                  key="Hard Courts"
                  className="court-type-link btn btn-outline-success btn-block"
                  to="/court-types/hard-courts"
                >
                  <small>Hard Courts</small>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={12} className="min-height mb-2">
            <Row className="full-height">
              <Col>
                <Link
                  key="Grass Courts"
                  className="court-type-link btn btn-outline-success btn-block"
                  to="/court-types/grass-courts"
                >
                  <small>Grass Courts</small>
                </Link>
              </Col>
              <Col>
                <Link
                  key="Indoor Courts"
                  className="court-type-link btn btn-outline-success btn-block"
                  to="/court-types/indoor-courts"
                >
                  <small>Indoor Courts</small>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        {courts[0] ? <SearchResult courts={courts} /> : ''}
      </div>
      <MobileFooter />
    </section>
  );
};

export default CourtTypes;
