import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Commitment.css';

const Commitment = () => {
    return (
        <div id="commitment">
            <h2 style={{paddingTop: '60px', paddingBottom: '140px', borderTop: '1px solid rgba(0, 0, 0, 0.2)'}} className="text-title text-center bg-light">Message From Founder</h2>
            <div className="commitment-container">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="set-img-width" style={{marginTop: '-75px'}}>
                                <img className="w-100" src="./images/founder/founder.png" alt="" />
                            </div>
                        </Col>

                        <Col xs={12} md={6} className="mt-5 pt-5 pb-5 d-flex justify-content-center">
                            <div className="text-center text-light">
                                <h1 className="mb-5">Greetings to our Family & Phychic Consulting</h1>
                                <p className="fs-5 fw-bold">It's my goal to create a comfortable, safe environment, where we'll work to achieve the goal together.</p>
                                <p className="fw-light">
								I am a certified specialist in the branch of psychology concerned with the assessment and treatment of mental illness and behavioural problems. My other passion is publishing. You can find and purchase all my books within this site.
							</p>
                                <p className="mt-5 text-uppercase fw-bold">Ronda Solomou | <span className="fs-5 fw-light text-capitalize">Psychologist</span></p>
                                <img className="mt-3 mb-2" src="./images/founder/signature.png" alt="" />
                                <div className="d-flex justify-content-center">
                                    <Link to="/about">
                                        <Button className="my-4 py-2 px-3" variant="success">About us</Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Commitment;