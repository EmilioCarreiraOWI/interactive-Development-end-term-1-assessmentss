import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";




function BasicNav() {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src="https://w7.pngwing.com/pngs/560/188/png-transparent-elon-musk-sticker-telegram-vkontakte-odnoklassniki-musk-stick-sticker-cartoon-odnoklassniki-thumbnail.png" alt="React Logo" id="logoImg"/></Navbar.Brand>
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