import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import LogoImg from "./LogoImg";

function BasicNav() {

    return(
        <Navbar class='mb-0' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><LogoImg /> SpaceX</Navbar.Brand>
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