// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

function TodoList(props) {
    return (
      <div>
        <h3>{props.items.task}</h3>
        <p>
        <strong>Id:</strong> {props.items.id}
        </p>
        <p>
        <strong>Completed:</strong> {props.items.completed}
        </p>
      </div>
    );
  }

  export default TodoList;