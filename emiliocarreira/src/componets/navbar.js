import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";



function BasicNav() {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">CFL</Navbar.Brand>
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