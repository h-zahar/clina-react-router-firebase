import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Shared/Header/Header.css';

const About = () => {
    return (
        <div className="bg-semilight">
            <div style={{ background:`radial-gradient(transparent, black), url('./images/banner/1.jpg') no-repeat top center fixed`, backgroundSize:'cover', height:"181px", backgroundBlendMode: 'saturation' }}>
                    <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="text-center d-flex justify-content-center align-items-center">
                        <div className="w-50 px-4 py-3 text-light"><h1>About</h1></div>
                </div>
            </div>
            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div>
                            <h1 className="title-text my-4">About <span className="brand">Clina</span></h1>
                            <p>Ribeye pork chop spare ribs, short loin cupim shoulder beef ribs pig shank corned beef boudin fatback ham. Biltong sausage short ribs fatback turducken frankfurter swine chicken. Capicola brisket venison picanha fatback pastrami, short ribs sirloin

                            Corned beef boudin landjaeger prosciutto kielbasa. Prosciutto brisket drumstick sausage pork chop landjaeger corne beef chuck filet mignon ham hock fatback.</p>

                            <div className="d-flex flex-wrap justify-content-start mt-5 mb-2 text-center">
                                <div className="me-3">
                                <p className="brand mb-1"><strong>200000+</strong></p>
                                <p className="text-highname">Patients Satisfied</p>
                                </div>

                                <div className="ms-3">
                                <p className="brand mb-1"><strong>12000+</strong></p>
                                <p className="text-highname">Phychologists</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div>
                            <img src="./images/about/about.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;