import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const signup = () => {
        props.signup({ username: username, password: password });
        const user = localStorage.getItem('user');
        if (localStorage.getItem('user') === username) {
            console.log('Login Successfully');
            props.history.push('/')
        }
        else {
            console.log('Failed login - check username and password');
        }

    }

    return (
        <Container>

            <h1>Sign Up</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={onChangeUsername}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={onChangePassword}
                    />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" onClick={signup} >Sign Up</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default Signup
