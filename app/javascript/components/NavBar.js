import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{ maxWidth: '991px', margin: '0 auto' }}>
      <Navbar.Brand>
        <div className="bold">
          BOOK<span className="green">OURT</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="green" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link to="/bookings" className="btn btn-outline-success mr-1">
            Bookings
          </Link>
          <Link to="/court-types" className="btn btn-outline-success">
            Courts
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
