import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const Services = () => {
    return (
        <div id="services">
            <div style={{paddingBottom: '180px'}} className="bg-semilight pt-5">
                <h2 className="text-title my-5 text-center">Our Services</h2>
                <div>
                    <div>
                        <Container>
                            <Row className="gy-4 justify-content-md-center">
                                <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;