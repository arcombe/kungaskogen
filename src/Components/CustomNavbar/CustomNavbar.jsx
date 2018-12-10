import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {

  render() {
    return (
      <Navbar default collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Kungaskogen</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1} title="OM" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>VÅR HISTORIA</MenuItem>
              <MenuItem eventKey={1.2}>BÖCKER</MenuItem>
              <MenuItem eventKey={1.3} componentClass={Link} href="/karaktarerna" to="/karaktarerna">KARAKTÄRERNA</MenuItem>
              <MenuItem eventKey={1.4}>ILKA</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="PRODUKTER" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Action</MenuItem>
              <MenuItem eventKey={2.2}>Another action</MenuItem>
              <MenuItem eventKey={2.3}>Something else here</MenuItem>
              <MenuItem eventKey={2.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="MUSIK" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="TEATHER" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem eventKey={4.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={5} componentClass={Link} href="/" to="/">
              ACCESS
            </NavItem>
            <NavDropdown eventKey={6} title="ÖVRIGT" id="basic-nav-dropdown">
              <MenuItem eventKey={6.1}>Action</MenuItem>
              <MenuItem eventKey={6.2}>Another action</MenuItem>
              <MenuItem eventKey={6.3}>Something else here</MenuItem>
              <MenuItem eventKey={6.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
