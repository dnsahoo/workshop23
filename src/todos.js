import React from 'react';
import Header from './header';
import TodoList from './todo-list';
import {connect} from 'react-redux';
import {deleteTodo} from './actions';

class Todos extends React.Component {
    handleDeleteTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }
    render() {
        return <div>
            <Header />
            <TodoList todos={this.props.todos}
                      onDeleteTodo={(todo) => this.handleDeleteTodo(todo)}/>
        </div>;
    }
}

export default connect(state => state)(Todos);
