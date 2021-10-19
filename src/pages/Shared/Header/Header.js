import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../../../logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div style={{ position:"fixed", width:"100%", top:"0", zIndex:"2", background: "rgba(0, 0, 0, 0.8)" }}>
        <nav>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container fluid className="px-5 py-3">
                    <LinkContainer exact to="/">
                        <Navbar.Brand className="ms-lg-5">
                        <img
                            alt=""
                            src={Logo}
                            width="38"
                            height="38"
                            className="d-inline-block align-center"
                            />{' '}
                        <span className="brand">Clina</span>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-lg-auto me-lg-5 my-lg-0 my-sm-2 text-center">
                        <LinkContainer exact to="/">
                            <Nav.Link className="me-lg-3">Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/serivices">
                            <Nav.Link className="me-lg-3">Services</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/about">
                            <Nav.Link className="me-lg-3">About</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contact">
                            <Nav.Link className="me-lg-3">Contact</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link className="me-lg-3">Login</Nav.Link>
                        </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    </div>
    )
}

export default Header;