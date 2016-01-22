import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos';
import TodoList from './todo-list';
import TodoDetail from './todo-detail';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistory, routeReducer} from 'redux-simple-router';
import DevTools from './devtools'

const initialState = {
    todos: []
};

const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
            return {todos: state.todos.filter(t => t !== action.todo)};
        case 'ADD_TODO':
            return {todos: state.todos.concat([action.todo])};
        case 'LOAD_TODOS':
            return {todos: action.todos};
        default:
            return state;
    }
};

const reducer = combineReducers({
    todos: todoApp,
    routing: routeReducer
});

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = compose(
        applyMiddleware(thunk,reduxRouterMiddleware),
        DevTools.instrument()
)(createStore);
const store = createStoreWithMiddleware(reducer);

reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Todos}>
                    <IndexRoute component={TodoList} />
                    <Route path=":id" component={TodoDetail} />
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root'));
