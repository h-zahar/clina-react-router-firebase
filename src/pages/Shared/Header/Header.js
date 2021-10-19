import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Logo from './logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div style={{ position:"sticky", width:"100%", top:"0", zIndex:"2", background: "rgba(0, 0, 0, 0.9)" }}>
        <nav>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container fluid className="px-5 py-3">
                    <LinkContainer exact to="/">
                        <Navbar.Brand className="ms-lg-5 d-flex align-items-center">
                        <img style={{borderRadius: '40px'}}
                            alt=""
                            src={Logo}
                            width="38"
                            height="38"
                            className="d-inline-block align-center"
                            />{' '}
                        <span className="brand ms-2">Clina</span>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-lg-auto me-lg-5 my-lg-0 my-sm-2 text-center">
                            <Nav.Link as={HashLink} exact to="/#" className="me-lg-3">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/#services" className="me-lg-3">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/#commitment" className="me-lg-3">Greet</Nav.Link>
                            <Nav.Link as={HashLink} to="/#faq" className="me-lg-3">FAQ</Nav.Link>

                            <Nav.Link as={HashLink} to="/about" className="me-lg-3">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className="me-lg-3">Contact</Nav.Link> 
                            <Nav.Link as={HashLink} to="/login" className="me-lg-3">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    </div>
    )
}

export default Header;