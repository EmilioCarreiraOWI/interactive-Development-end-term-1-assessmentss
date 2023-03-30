import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function BasicNav() {

    const [launches, setLaunches] = useState([]);
const [randomIndex, setRandomIndex] = useState(0);

useEffect(() => {
  axios.get('https://api.spacexdata.com/v3/launches')
    .then(response => setLaunches(response.data))
    .catch(error => console.log(error));
}, []);

useEffect(() => {
  setRandomIndex(Math.floor(Math.random() * launches.length));
}, [launches]);

    return(
        <Navbar class='mb-0' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src={launches[randomIndex]?.links.mission_patch_small} alt="React Logo" id="logoImg"/> SpaceX</Navbar.Brand>
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