import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNav, Nav} from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <BsNav collapseOnSelect expand="sm" bg="light" variant="light">
        <BsNav.Brand>
          <Link to='/' className="BsNav-Brand link"><p className="BsNav-Logo">Aly Nguyen</p></Link>
        </BsNav.Brand>
        <BsNav.Toggle aria-controls="responsive-navbar-nav" />
        <BsNav.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        </BsNav.Collapse>
        <Nav.Link className="link" href="#about">About</Nav.Link>
        <Nav.Link className="link" href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link className="link" href="#contact">Contact</Nav.Link>
      </BsNav>
    </div>
  );
}

export default Navbar;
