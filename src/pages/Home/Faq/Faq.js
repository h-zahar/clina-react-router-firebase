import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <div id="faq" className="bg-light">
            <Container>
            <Row>
                <h2 className="text-center text-title my-5 py-5">Frequently Asked Questions</h2>
                <Col xs={12} md={6}>
                    <Accordion className="shadow-lg" defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                            
							<span class="fw-bold">What can I expect in the first session when I see a psychologist?</span>
											
                            </Accordion.Header>
                            <Accordion.Body>
                            You'd not have to expect. We're free minded people who understand you. That's what clina means.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span class="fw-bold">What are the signs of being abused by your partner?</span></Accordion.Header>
                            <Accordion.Body>
                            If they suppress you physically or verbally or both, it is the biggest sign. To know more, contact us.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                            
							<span class="fw-bold">What specific types are suitable for treatment?</span>
											
                            </Accordion.Header>
                            <Accordion.Body>
                            Every types are suitable for us. We treat any types of mental diseases.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                            
							<span class="fw-bold">How much money do psychologists make?</span>
											
                            </Accordion.Header>
                            <Accordion.Body>
                            Hehe, that's very interesting question. We make people happy. That's it.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                </Col>
                <Col xs={12} md={6}>
                    <div className="mt-5 mt-md-0">
                        <img className="w-100" src="./images/faq/faq.jpg" alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Faq;