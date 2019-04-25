// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

function TodoList(props) {
    return (
      <ul className="listWrap">
        {props.items.map(item => {
            return(
                <Todo item={item} key={item.id} click={props.taskClick} />
            )
        })}
      </ul>
    );
    
  }

  export default TodoList;