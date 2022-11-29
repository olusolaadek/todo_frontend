import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, getPassword] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChnagePassword = (e) => {
        password = e.target.value;
        setPassword(password);
    }

    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login
