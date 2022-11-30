import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const pass = e.target.value;
        setPassword(pass);
    }

    const login = (e) => {
        // console.log('e', e);
        // console.log(`localStorage.getItem(${'user'})`, localStorage.getItem('user'));
        // console.log(username);

        props.login({ username: username, password: password });
        if (localStorage.getItem('user') === username) {
            console.log('Login Successfully');
            props.history.push('/')
        }
        else {
            console.log('Failed login - check username and password');
        }
        // props.history.push('/') // redirect to the root
    }

    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={onChangeUsername}
                    />
                </Form.Group >
                <Form.Group>
                    <Form.Label className="mb-3">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </Form.Group>
                <br />
                <Button variant="primary" type="button" onClick={login} >Login</Button>
            </Form>

        </Container >
    )
}

export default Login
