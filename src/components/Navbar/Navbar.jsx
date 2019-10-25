import React from 'react';
import { Navbar as BsNav, Nav} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const navStyle = {
  padding: ".1em",
  color: "black"
};

const Navbar = () => {
  return (
    <div id="home">
      <BsNav collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
        <BsNav.Brand>
          <AnchorLink href="#home" className="BsNav-Brand link">Aly Nguyen</AnchorLink>
        </BsNav.Brand>
        <BsNav.Toggle aria-controls="responsive-navbar-nav" />
        <BsNav.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <AnchorLink style={navStyle} className="Navbar-Link nav-link" href="#about">About</AnchorLink>
            <AnchorLink style={navStyle} className="Navbar-Link nav-link" href="#projects">Projects</AnchorLink>
            <AnchorLink style={navStyle} className="Navbar-Link nav-link" href="#contact">Contact</AnchorLink>
          </Nav>
        </BsNav.Collapse>
      </BsNav>
    </div>
  );
}

export default Navbar;
