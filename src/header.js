import React from 'react';
import NewTodo from './new-todo';

class Header extends React.Component {
    render() {
        return <header>
            <h1>Todos</h1>
            <NewTodo onAddTodo={this.props.onAddTodo} />
        </header>;
    }
}

export default Header;
