import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const CourtTypes = () => {
  return (
    <section
      style={{ backgroundColor: '#e2f0d3' }}
      className="CourtTypes text-center"
    >
      <Container className="container p-5">
        <Form>
          <Form.Row>
            <Col lg={9} md={9} sm={9} xs={9}>
              <Form.Control
                className="input"
                type="text"
                placeholder="Search for a court by name"
              />
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
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
        <h6 className="my-3 bold">SEARCH COURTS</h6>
        <small>
          Search by directly typing the court's name above. You can also search
          by the court types listed below.
        </small>
        <Row className="my-5">
          <Col lg={12} className="min-height">
            <Row className="full-height">
              <Col>
                <Link
                  key={'All Courts'}
                  className="court-type-link"
                  to={`/court-types/all-courts`}
                  className="norm-button"
                >
                  All Courts
                </Link>
              </Col>
              <Col>
                <Link
                  key={'Carpet Courts'}
                  className="court-type-link"
                  to={`/court-types/carpet-courts`}
                  className="norm-button"
                >
                  Carpet Courts
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={12} className="min-height">
            <Row className="full-height">
              <Col>
                <Link
                  key={'Clay Courts'}
                  className="court-type-link"
                  to={`/court-types/clay-courts`}
                  className="norm-button"
                >
                  Clay Courts
                </Link>
              </Col>
              <Col>
                <Link
                  key={'Hard Courts'}
                  className="court-type-link"
                  to={`/court-types/hard-courts`}
                  className="norm-button"
                >
                  Hard Courts
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={12} className="min-height">
            <Row className="full-height">
              <Col>
                <Link
                  key={'Grass Courts'}
                  className="court-type-link"
                  to={`/court-types/grass-courts`}
                  className="norm-button"
                >
                  Grass Courts
                </Link>
              </Col>
              <Col>
                <Link
                  key={'Indoor Courts'}
                  className="court-type-link"
                  to={`/court-types/indoor-courts`}
                  className="norm-button"
                >
                  Indoor Courts
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourtTypes;
