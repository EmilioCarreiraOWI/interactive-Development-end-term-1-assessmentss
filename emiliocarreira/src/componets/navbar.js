import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";



function BasicNav() {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/CFL_Logo.svg/1123px-CFL_Logo.svg.png" alt="React Logo" id="logoImg"/></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/Compare">Compare</Nav.Link>
                    <Nav.Link href="/Timeline">TimeLine</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BasicNav;