import React from 'react';


const TodoForm = props => {
    return (
        <form>  
            <input type="text" placeholder="Todo Items Here" />
            <button role="submit">Submit</button>
            <button>Clear</button>
        </form>
    );
}

export default TodoForm;