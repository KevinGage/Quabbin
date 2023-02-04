import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import QuabbinThumbnail from "../../images/QuabbinThumbnail.png";

function NavbarComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <img src={QuabbinThumbnail} alt="logo" />
        Quabbin Classic
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Records
          </Nav.Link>
          <Nav.Link as={Link} to="/data">
            Spreadsheet
          </Nav.Link>
          <Nav.Link as={Link} to="/stats">
            Stats
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
