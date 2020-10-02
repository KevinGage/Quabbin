import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import QuabbinThumbnail from '../../images/QuabbinThumbnail.png';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand href="/">
        <img src={QuabbinThumbnail} alt='logo'/>
        Quabbin Classic
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Records</Nav.Link>
          <Nav.Link href="/stats">Stats</Nav.Link>
          <Nav.Link href="/data">Spreadsheet</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}

export default NavbarComponent;