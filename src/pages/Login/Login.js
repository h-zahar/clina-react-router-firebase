import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle, setEmail, setPassword, setUser, loginUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
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
        loginUser()
        .then(result => {
            setUser(result.user);
            history.push(redirect_url);
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <div className="shadow-lg p-5 rounded" style={{width: '300px'}}>
                    <Form onSubmit={handleSubmit} variant="dark">
                    <h3 className="brand text-center mb-4">Login</h3>
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
                        Login
                    </Button>
                    <p className="brand mt-4 text-center">Or, Sign in with Google</p>
                    <div className="d-flex justify-content-center">
                        <Button className="google-hover p-2 rounded-circle" onClick={handleGoogleSignIn} variant="dark"><i className="google-logo fa-brands fa-google"></i></Button>
                    </div>
                    <p className="mt-4 text-center">New Here? <Link to="/register">Register</Link></p>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;