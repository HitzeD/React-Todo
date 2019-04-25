import React from 'react';


const TodoForm = props => {
    return (
        <form onSubmit={props.work}> 
            <input value={props.task} placeholder="Todo Items Here" onChange={props.clicker} name="openJobs" />
            <button type="submit">Submit</button>
            <button onClick={props.removeItems} >Clear</button>
        </form>
    );
}

export default TodoForm;