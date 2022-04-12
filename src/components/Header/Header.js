import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    console.log(user);
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        <h1><FontAwesomeIcon icon={faBowlFood} id='icon'></FontAwesomeIcon>Meal Stories</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/learnmore">Learn More</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
                            {
                                user? <p>{user.displayName}</p> : ''
                            }
                            {user?.uid ? <Nav.Link onClick={handleSignOut}>Log Out</Nav.Link> : <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;