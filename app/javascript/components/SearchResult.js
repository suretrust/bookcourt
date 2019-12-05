import React from 'react';
import Court from './Court';
import { Form, Row, Col, Button } from 'react-bootstrap';

const SearchResult = ({ courts }) => {
  return (
    <section>
      <Row className="row">
        {courts.map(court => (
          <Col key={court.id} lg={6} md={6} sm={12} className="Court my-3 py-3">
            <Court court={court} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default SearchResult;
