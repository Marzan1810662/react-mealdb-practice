import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signUpWithEmailPassword } = useFirebase(email, password);
    const [error, setError] = useState('');
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }
    const handleCreateuser = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError('passwords do not match!');
            return;
        }
        signUpWithEmailPassword();
    }
    return (
        <div className='container my-4'>
            <div className='form-container mx-auto my-lg-5'>
                <h3 className='text-center pt-5 login-title'>Sign Up</h3>
                <Form className='ps-5 pe-5 pb-5' onSubmit={handleCreateuser} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p>{error}</p>
                    <p>Already A User?? <Link to='/login'>Login</Link></p>
                    <Button type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;