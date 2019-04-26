import React from 'react';
import './Todo.css';

const Todo = props => {
    // console.log(props.item.id);
    return (
        <div onClick={() => props.click(props.item.id)} className={`item${props.item.completed ? ' completed' : ''}`}>
            <h4>{props.item.task}</h4>
        </div>
    )
}

export default Todo;