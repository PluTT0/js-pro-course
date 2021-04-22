import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss'

const NavBar = () => {
  return (
    <Nav id="navBar" variant="tabs" defaultActiveKey="/"> 
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/post_app/">Post app</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/emoji">Emoji search</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavBar;