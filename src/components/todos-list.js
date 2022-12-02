import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";
import TodoDataService from "../services/todos-services";
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

    const deleteTodo = (todoId) => {
        TodoDataService.deleteTodo(todoId, props.token)
            .then(response => {
                retrieveTodos();
            })
            .catch(e => {
                console.log('Delete Todo', e);
            })
    }
    const completeTodo = (todoId) => {
        TodoDataService.completeTodo(todoId, props.token)
            .then(response => {
                retrieveTodos();
                console.log("Complete Todo", todoId);
            })
            .catch(e => {
                console.log("completeTodo", e);
            })
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
                                    <div className={`${todo.completed ? "text-decoration-line-through" : ""}`}>
                                        <Card.Title>{todo.title}</Card.Title>
                                        <Card.Text>
                                            <b>Memo:</b> {todo.memo}
                                        </Card.Text>
                                        <Card.Text>Date Created: {moment(todo.created).format('Do MMMM YYYY')}</Card.Text>
                                    </div>
                                    <Link
                                        to={{ pathname: "/todos/" + todo.id, state: { currentTodo: todo } }}
                                    >
                                        <Button variant="outline-info" className="me-2">Edit</Button>
                                    </Link>
                                    <Button variant="outline-danger" onClick={() => deleteTodo(todo.id)}>
                                        Delete
                                    </Button>
                                    <Button
                                        className="ms-2"
                                        variant="outline-success" onClick={() => completeTodo(todo.id)}>
                                        Complete
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
