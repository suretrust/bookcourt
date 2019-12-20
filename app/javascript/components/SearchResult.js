import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Court from './Court';

const SearchResult = ({ courts }) => {
  return (
    <section>
      <Row className="row">
        {courts.map(court => (
          <Col
            key={court.id}
            lg={12}
            md={12}
            sm={12}
            className="Court my-3 py-3"
          >
            <Court court={court} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

SearchResult.propTypes = {
  courts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SearchResult;
