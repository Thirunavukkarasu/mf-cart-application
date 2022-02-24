import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useRecoilState, atom, useRecoilValue } from 'recoil';

import { CounterState } from './states/CounterState';

function Header() {
    const counter = useRecoilValue(CounterState);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Cart Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="product" className="nav-link">Product</Link>
                        <Link to="payment" className="nav-link">Payment</Link>
                    </Nav>
                </Navbar.Collapse>
                {counter}
            </Container>
        </Navbar>
    )
}

export default Header