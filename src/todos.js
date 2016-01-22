import React from 'react';
import Header from './header';
import TodoList from './todo-list';

class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ["Todo #1", "Todo #2", "Todo #3"]
        };
    }

    handleDeleteTodo(todo) {
        this.setState({todos: this.state.todos.filter(t => t !== todo)});
    }

    render() {
        return <div>
            <Header />
            <TodoList todos={this.state.todos} onDeleteTodo={(todo) => this.handleDeleteTodo(todo)}/>
        </div>
    }
}

export default Todos;
