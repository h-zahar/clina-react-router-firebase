import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="bg-semilight contact-container pb-4">
            <div style={{ background:`radial-gradient(transparent, black), url('./images/banner/1.jpg') no-repeat top center fixed`, backgroundSize:'cover', height:"181px", marginBottom: '20px', backgroundBlendMode: 'saturation' }}>
                    <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="text-center d-flex justify-content-center align-items-center">
                        <div className="w-50 px-4 py-3 text-light"><h1>Leave us a Message</h1></div>
                </div>
            </div>
            
            <div style={{ maxWidth: '400px', minWidth: '300px', backgroundColor: '#fff' }} className="py-4 px-3 pb-5 mx-auto shadow border">
                    <Form>
                        <FormGroup>
                            <Form.Label></Form.Label>
                            <Form.Control className="bg-light" type="text" placeholder="Enter Name" />
                            <Form.Text className="text-muted">
                                We'll never share your name with anyone else.
                            </Form.Text>
                        </FormGroup>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control className="bg-light" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <FormGroup>
                            <Form.Label></Form.Label>
                            <Form.Control className="bg-light" type="text" placeholder="Enter Subject" />
                        </FormGroup>

                        <Form.Group className="mb-4" controlId="messageForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control className="bg-light" as="textarea" style={{ resize: 'none' }} rows={3} placeholder="Enter Message" />
                        </Form.Group>
                        <Button variant="success" className="border-0 brand-bg" type="submit">Submit</Button>
                    </Form>
            </div>
        </div>
    )
}

export default Contact;