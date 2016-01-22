import React from 'react';

class NewTodo extends React.Component {
    handleAdd(e) {
        e.preventDefault();
        this.props.onAddTodo(this.refs.newTodo.value);
    }
    render() {
        return <form>
            <input type="text" ref="newTodo" />
            <input type="submit" value="Add" onClick={(e) => this.handleAdd(e)} />
        </form>
    }
}

export default NewTodo;
