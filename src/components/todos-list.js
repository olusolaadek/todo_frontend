import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoDataService from "../services/todos";

const TodosList = (props) => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        retrieveTodos();
    }, [props.token]);

    const retrieveTodos = () => {
        console.log("Token", props.token);
        TodoDataService.getAll(props.token)
            .then(response => {
                setTodos(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    return (
        <div>
            <h1>Todos List</h1>

        </div>
    )
}

export default TodosList;
