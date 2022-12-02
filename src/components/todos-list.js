import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";
import TodoDataService from "../services/todos";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import moment from "moment";

const TodosList = (props) => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        retrieveTodos();
    }, [props.token]);

    const retrieveTodos = () => {

        console.log("Token", props.token);
        const token = localStorage.getItem('token');
        console.log("Loaded token", token);
        TodoDataService.getAll(token) // props.token
            .then(response => {
                setTodos(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    return (
        <Container>
            <Link to={"/todos/create"}>
                <Button variant="outline-info">Add Todo</Button>
            </Link>

            <h1>Todos List</h1>

            {(props.token == null || props.token === "") && 1 === 2 ? (
                <Alert variant='warning'>
                    You are not logged in. Please <Link to={"/login"}>login</Link> to see your todos.
                </Alert>
            ) : (
                <div>
                    {todos.map((todo) => {
                        return (
                            <Card key={todo.id} className>
                                <Card.Body>
                                    <div>
                                        <Card.Title>{todo.title}</Card.Title>
                                        <Card.Text>
                                            <b>Memo:</b> {todo.memo}
                                        </Card.Text>
                                        <Card.Text>Date Created: {moment(todo.created).format('Do MMMM YYYY')}</Card.Text>
                                    </div>
                                    <Link
                                        to={{ pathway: "/todos" + todo.id, state: { currentTodo: todo } }}
                                    >
                                        <Button variant="outline-info" className="me-2">Edit</Button>
                                    </Link>
                                    <Button variant="outline-danger">
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            )
            }
        </Container >
    )
}

export default TodosList;
