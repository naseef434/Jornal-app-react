import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Button,Col,Row, Container,Nav,FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function MyNavbar() {
    return (
        <>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="/">Journal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}


