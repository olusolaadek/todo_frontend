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
        console.log(username);

        props.login({ username: username, password: password });
        // if (localStorage.getItem('username') === username) {
        //     props.history.push('/')
        // }
        props.history.push('/')
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
