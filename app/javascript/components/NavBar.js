import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="bg-white" style={{ maxWidth: '100%' }}>
      <Navbar expand="lg" style={{ maxWidth: '991px', margin: '0 auto' }}>
        <Navbar.Brand>
          <Link to="/" className="bold decoration-on-hover">
            BOOK<span className="green">OURT</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center mb-lg-0 mb-3">
            <Link
              to="/bookings"
              className="green mx-auto pt-lg-0 pt-3 mr-lg-4 nav-link-btn"
            >
              Bookings
            </Link>
            <Link
              to="/court-types"
              className="green mx-auto pt-lg-0 pt-3 nav-link-btn"
            >
              Courts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
