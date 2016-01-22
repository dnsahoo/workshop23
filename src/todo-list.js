import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    render() {
        return <ul>
            {this.props.todos.map(todo => <li key={todo.id}>
                <Link to={`/${todo.id}`}>{todo.todo}</Link>
                <button onClick={() => this.props.onDeleteTodo(todo)}>x</button>
            </li>)}
        </ul>
    }
}

const selector = (state) => {
    return {todos: state.todos.todos};
};
export default connect(selector)(TodoList);
