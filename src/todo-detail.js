import React from 'react';
import {connect} from 'react-redux';

class TodoDetail extends React.Component {
    render() {
        return <p>{this.props.todo.todo}</p>;
    }
}
const selector = (state, props) => {
    return {todo: state.todos.todos.find(todo => todo.id == props.routeParams.id)};
};
export default connect(selector)(TodoDetail);
