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
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ml-lg-auto">
            <Link to="/bookings" className="green nav-link-btn">
              Bookings
            </Link>
            <Link to="/court-types" className="green nav-link-btn">
              Courts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
