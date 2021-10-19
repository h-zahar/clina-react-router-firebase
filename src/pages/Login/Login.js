import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <div className="shadow-lg p-5 rounded" style={{width: '300px'}}>
                    <Form variant="dark">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-flex flex-column justify-content-center">
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                    <div className="d-flex justify-content-center mt-3">
                        <Button className="google-hover p-2 rounded-circle" onClick={signInWithGoogle} variant="dark"><i className="google-logo fa-brands fa-google"></i></Button>
                    </div>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;