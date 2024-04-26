import React from 'react'
import {Navbar, Nav , NavDropdown, Container} from 'react-bootstrap'

export default function NavbarHeader() {
  return (
    <>
     <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Aplicacion Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto pe-5'>
            <Nav.Link className='pe-5 fs-4' href="#home">Table</Nav.Link>
            <Nav.Link className='pe-5 fs-4' href="#link">Cards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
