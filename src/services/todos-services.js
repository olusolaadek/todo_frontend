import axios from 'axios';

class TodoDataService {
    token = "41db13decddcdbdc19f23157643e5384f28392ba"
    getAll(token) {
        token = this.token;
        axios.defaults.headers.common['Authorization'] = 'Token ' + token
        console.log("Inside GetAll method", token);
        return axios.get("http://localhost:8000/api/todos/")
    }

    createTodo(data, token) {
        token = this.token;
        axios.defaults.headers.common['Authorization'] = 'Token ' + token
        return axios.post("http://localhost:8000/api/todos/", data)
    }

    updateTodo(id, data, token) {
        token = this.token
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/todos/${id}`, data);
    }

    deleteTodo(id, token) {
        token = this.token;
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api/todos/${id}`);
    }

    completeTodo(id, token) {
        token = this.token;
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/todos/${id}/complete`);
    }

    login(data) {
        return axios.post("http://localhost:8000/api/login/", data);
    }

    signup(data) {
        return axios.post("http://localhost:8000/api/signup/", data);
    }
}

export default new TodoDataService;
