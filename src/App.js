// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TodosList from './components/todos-list'
import AddTodo from './components/add-todo'
import Login from './components/login'
import Signup from './components/signup'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';

import TodoDataService from './services/todos-services'


const App = () => {



  const [user, setUser] = React.useState(null)
  const [token, setToken] = React.useState(null)
  const [error, setError] = React.useState('')

  async function login(user = null) { // default user to null
    TodoDataService.login(user)
      .then(response => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', user.username);
        setError('');
        console.log("Login successful");
      })
      .catch(e => {
        console.log('login: ', e)
        setError(e.toString());
      })
  }
  async function logout() {
    setToken('');
    setUser('');
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
  }
  async function signup(user = null) { // default user to null
    TodoDataService.signup(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem('user', user.username);
        localStorage.setItem('token', response.data.token);
      })
      .catch((e) => {
        console.log(e);
        setError(e.toString())
      })
  }

  return (

    <div className="App">
      <Router>
        <Navbar bg='primary' variant='dark'>
          <div className="container-fluid">
            <Navbar.Brand>Todo App</Navbar.Brand>
            <Nav className="me-auto">

              {/* <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link> */}
              <Container>
                <Link className="nav-link" to={"/"}>Todos</Link>
                {user ? (
                  <Link className="nav-link" to={"/login"} onClick={logout}>Logout ({user})</Link>
                ) : (
                  <>
                    <Link className="nav-link" to={"/login"}>Login</Link>
                    <Link className="nav-link" to={"/signup"} onClick={signup}>Sign Up</Link>
                  </>
                )}
              </Container>
            </Nav>
          </div>
        </Navbar>

        {/* Add routes */}

        <div className="container mt-4" >

          <Switch>
            <Route exact path={["/", "/todos"]} render={(props) =>
              <TodosList {...props} token={token} />
            }>
            </Route>
            <Route path="/todos/create" render={(props) =>
              <AddTodo {...props} token={token} />
            }>
            </Route>
            {/* Edit route */}
            <Route path="/todos/:id/" render={(props) =>
              <AddTodo {...props} token={token} />
            }>
            </Route>
            <Route path="/login" render={(props) =>
              <Login {...props} login={login} />
            }>
            </Route>
            <Route path="/signup" render={(props) =>
              <Signup {...props} signup={signup} />
            }>
            </Route>
          </Switch>

        </div>
      </Router>

      <footer className="text-center text-lg-start bg-light text-muted mt-4" >
        <div className="text-center p-4">
          ?? Copyright {new Date().getUTCFullYear()} - <a
            target="_blank"
            className="text-reset fw-bold text-decoration-none"
            href="https://twitter.com/olusolaadekunle"
          >
            Olusola Adekunle</a>
          {/*  - <a
            target="_blank"
            className="text-reset fw-bold text-decoration-none"
            href="https://twitter.com/olusolaadekunle"
          >

          </a> */}
        </div>
      </footer>

    </div >

  );
}

export default App;
