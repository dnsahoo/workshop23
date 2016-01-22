import axios from 'axios';
import {routeActions} from 'redux-simple-router';

export function deleteTodo(todo) {
    return {type: 'DELETE_TODO', todo: todo};
}

export function addTodoSuccess(todo) {
    return {type: 'ADD_TODO', todo: todo}
}
export function addTodo(todo) {
    return (dispatch) => {
        axios.post('/todos', {todo: todo}).then(res => {
            dispatch(addTodoSuccess(res.data));
            dispatch(routeActions.push(`/${res.data.id}`));
        })
    };
}

export function fetchTodos() {
    return (dispatch) => {
        axios.get('/todos').then(res => {
            dispatch(fetchTodosSuccess(res.data));
        })
    }
}

export function fetchTodosSuccess(todos) {
    return {type: 'LOAD_TODOS', todos: todos};
}
