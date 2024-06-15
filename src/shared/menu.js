import React from 'react'
import PropTypes from 'prop-types'
import {Link,NavLink} from 'react-router-dom'
import { Container,Nav,Navbar } from 'react-bootstrap';

function Menu(props) {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link> <Link to={"home"}>Home</Link></Nav.Link>
        <Nav.Link> <Link to={"login"}>Login</Link></Nav.Link>
        <Nav.Link> <Link to={"checkout"}>Checkout</Link></Nav.Link>
        <Nav.Link> <Link to={"account"}>Account</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
}

Menu.propTypes = {}

export default Menu
