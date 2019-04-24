import React from 'react';


const TodoForm = props => {
    return (
        <form onSubmit={props.work}> 
            <input placeholder="Todo Items Here" onChange={props.clicker} />
            <button role="submit">Submit</button>
            <button>Clear</button>
        </form>
    );
}

export default TodoForm;