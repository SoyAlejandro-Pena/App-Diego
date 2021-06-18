import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './BarraDeNavegacion.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function BarraDeNavegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Promociones</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Calzado de dama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Calzado de caballero</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Camisetas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default BarraDeNavegacion;