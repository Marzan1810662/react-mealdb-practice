import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import googleLogo from '../../images/icons/google-logo.png'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { LogInwithEmailAndPassword, signInWithGoogle } = useFirebase(email, password);
    // const [error, setError] = useState('');

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleuserLogIn = (e) => {
        e.preventDefault();

        LogInwithEmailAndPassword();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className='container my-4'>
            <div className='form-container mx-auto my-lg-5'>
                <h3 className='text-center pt-5 login-title'>Login</h3>
                <Form className='ps-5 pe-5' onSubmit={handleuserLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>Don't Have an Account? <Link to='/signup'>Signup</Link></p>
                    <Button type="submit">
                        Login
                    </Button>
                </Form>
                <div className='text-center mt-3'>
                    <span></span>
                    <strong>Or</strong>
                    <span></span>
                </div>
                <div className='mt-3 pb-5 google-signin-div'>
                    <button onClick={handleGoogleSignIn}><img className='img-fluid' src={googleLogo} alt="" /> Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;