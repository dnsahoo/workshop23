import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    todos: [
        {id: 1, todo: 'Learn React.js'},
        {id: 2, todo: 'Build React Applications'}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
            return {todos: state.todos.filter(t => t !== action.todo)};
        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.render(
        <Provider store={store}>
            <Todos />
        </Provider>,
        document.getElementById('root'));
