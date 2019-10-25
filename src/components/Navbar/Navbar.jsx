import React from 'react';
import { Navbar as BsNav, Nav} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="home">
      <BsNav collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
        <BsNav.Brand>
          <a href="#home" className="BsNav-Brand link nav-link">Aly Nguyen</a>
        </BsNav.Brand>
        <BsNav.Toggle aria-controls="responsive-navbar-nav" />
        <BsNav.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <a className="Navbar-Link link nav-link" href="#about">About</a>
          <a className="Navbar-Link link nav-link" href="#projects">Projects</a>
          <a className="Navbar-Link link nav-link" href="#contact">Contact</a>
        </BsNav.Collapse>
      </BsNav>
    </div>
  );
}

export default Navbar;
