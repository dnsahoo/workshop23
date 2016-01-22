import React from 'react';
import Header from './header';
import TodoList from './todo-list';
import {connect} from 'react-redux';
import {deleteTodo, addTodo, fetchTodos} from './actions';
import {createSelector} from 'reselect';

class Todos extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchTodos());
    }

    handleDeleteTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }

    handleAddTodo(todo) {
        this.props.dispatch(addTodo(todo));
    }

    render() {
        return <div>
            <Header onAddTodo={(todo) => this.handleAddTodo(todo)}/>
            {this.props.children}
        </div>
    }
}

export default connect(createSelector(x => x, x=> x))(Todos);
