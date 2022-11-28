// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import TodosList from './components/todos-list'
import AddTodo from './components/add-todo'
import Login from './components/login'
import Signup from './components/signup'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar bg='primary' variant='dark'>
        <div className="container-fluid">
          <Navbar.Brand>Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </div>
      </Navbar>

    </div>
  );
}

export default App;
