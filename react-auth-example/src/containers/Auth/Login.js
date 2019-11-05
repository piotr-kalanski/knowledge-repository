import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { AuthContext } from '../../context/auth-context';

const Login = props => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        authContext.login(userName, password);
        props.history.push('/');
    }

    return (
        <Container>
            <Card>
                <Card.Header>Log in</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="User" value={ userName } onChange={(event) => setUserName(event.target.value) } />
                        <Form.Text className="text-muted">Username</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"  value={ password } onChange={(event) => setPassword(event.target.value) }  />
                        <Form.Text className="text-muted">Password</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={ handleLogin }>Login</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
 
export default Login;