import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle, setEmail, setPassword, createUser } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
    }

    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <div className="shadow-lg p-5 rounded" style={{width: '300px'}}>
                    <Form onSubmit={handleSubmit} variant="dark">
                        <h3 className="brand text-center mb-4">Register</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="mt-4 d-flex flex-column justify-content-center">
                    <Button variant="success" type="submit">
                        Register
                    </Button>
                    <p className="brand mt-4 text-center">Or, Sign in with Google</p>
                    <div className="d-flex justify-content-center">
                        <Button className="google-hover p-2 rounded-circle" onClick={signInWithGoogle} variant="dark"><i className="google-logo fa-brands fa-google"></i></Button>
                    </div>
                    <p className="mt-4 text-center">Already Here? <Link to="/register">Login</Link></p>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register;