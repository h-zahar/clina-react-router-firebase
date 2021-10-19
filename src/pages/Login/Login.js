import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <Button className="google-hover p-3 rounded-circle" onClick={signInWithGoogle} variant="dark"><i className="google-logo fa-brands fa-google"></i></Button>
        </div>
    )
}

export default Login;