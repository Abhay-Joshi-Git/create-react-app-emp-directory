import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => (
  <Navbar className="my-3">
    <div className="container">
      <Navbar.Header>
        <LinkContainer activeClassName="active-nav" exact to="/" className="navbar-brand">
          <NavItem>Home</NavItem>
        </LinkContainer>
      </Navbar.Header>
      <Nav style={{ textAlign: 'left' }}>
        <LinkContainer activeClassName="active-nav" to="/test">
          <NavItem>Test</NavItem>
        </LinkContainer>
      </Nav>
      <Nav style={{ textAlign: 'left' }}>
        <LinkContainer activeClassName="active-nav" to="/departments">
          <NavItem>Departments</NavItem>
        </LinkContainer>
      </Nav>
    </div>
  </Navbar>
);

export default Header;
