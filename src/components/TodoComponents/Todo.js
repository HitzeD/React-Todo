import React from 'react';
import TodoForm from './TodoForm.js';

const Todo = props => {
    return (
        <div>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;