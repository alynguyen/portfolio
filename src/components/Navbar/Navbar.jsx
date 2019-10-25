import React from 'react';
import { Navbar as BsNav, Nav} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="home">
      <BsNav collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
        <BsNav.Brand>
          <AnchorLink href="#home" className="BsNav-Brand link nav-link">Aly Nguyen</AnchorLink>
        </BsNav.Brand>
        <BsNav.Toggle aria-controls="responsive-navbar-nav" />
        <BsNav.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <AnchorLink className="Navbar-Link link nav-link" href="#about">About</AnchorLink>
          <AnchorLink className="Navbar-Link link nav-link" href="#projects">Projects</AnchorLink>
          <AnchorLink className="Navbar-Link link nav-link" href="#contact">Contact</AnchorLink>
          <Nav.Link>Test</Nav.Link>
        </BsNav.Collapse>
      </BsNav>
    </div>
  );
}

export default Navbar;
