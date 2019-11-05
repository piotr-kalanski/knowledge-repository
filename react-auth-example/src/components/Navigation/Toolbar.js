import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const Toolbar = () => {
    const authContext = useContext(AuthContext);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand to="/" as={NavLink} >React Auth Template Example</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/page1">Page1</Nav.Link>
                    <Nav.Link as={NavLink} to="/page2">Page2</Nav.Link>
                    {authContext.isAuthenticated && <Nav.Link as={NavLink} to="/pageAuthenticated">Page authenticated</Nav.Link> }
                </Nav>
                <Nav>
                { authContext.isAuthenticated
                    ?
                        <NavDropdown title={ authContext.user } id="basic-nav-dropdown" drop="left">
                            <NavDropdown.Item as={NavLink} to="/user/account">Manage account</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/user/change-password">Change password</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/logout">Log-out</NavDropdown.Item>
                        </NavDropdown>
                    :
                        <React.Fragment>
                            <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
                            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                        </React.Fragment>
                }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Toolbar;