import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { user, signInWithGoogle, setEmail, setPassword, setUser, createUser, setIsLoading, updateUserName, setName } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }

    const handleName =(e) => {
        setName(e.target.value);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirect_url);
        })
        .finally(() => setIsLoading(false));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser()
        .then(result => {
            setUser(result.user);
            updateUserName();
            history.push(redirect_url);
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <div className="shadow-lg p-5 rounded" style={{width: '300px'}}>
                    <Form onSubmit={handleSubmit} variant="dark">
                        <h3 className="brand text-center mb-4">Register</h3>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleName} type="text" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your Name with anyone else.
                        </Form.Text>
                    </Form.Group>

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
                        <Button className="google-hover p-2 rounded-circle" onClick={handleGoogleSignIn} variant="dark"><i className="google-logo fa-brands fa-google"></i></Button>
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