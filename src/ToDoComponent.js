import React from 'react';
import PropTypes from 'prop-types';

const ToDoComponent = function ({toggleTodo, todo, isCompleted}) {
    return (<div>
        <li style={{
            color: isCompleted ? "green" : "red",
            textDecoration: isCompleted ? 'line-through' : 'none'
        }}>{todo}
        </li>
        <input type="checkbox" onClick={toggleTodo} checked={isCompleted}/>
    </div>)
}

ToDoComponent.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    todo: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
}

export default ToDoComponent
