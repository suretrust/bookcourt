import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <Row className="p-5">
          <Col lg md={12} className="my-4">
            <h4 className="bold">Company</h4>
            <p>
              Bookourt is increasing tennis participation and workout by
              allowing you to easily book a court ahead from anywhere in the
              world.
            </p>
          </Col>
          <Col lg md={12} className="my-4">
            <h4 className="bold">Contact Us</h4>
            <p>Block 26, Pacific Estate, Igando, Lagos, Nigeria.</p>
            <p>info@bookourt.com</p>
            <p>+234 (0) 8135323625</p>
          </Col>
          <Col lg md={12} className="my-4">
            <h4 className="bold">More Links</h4>
            <div>
              <a href="/">Terms of service</a>
            </div>
            <div>
              <a href="/">Privacy policy</a>
            </div>
            <div>
              <a href="/">FAQs</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
