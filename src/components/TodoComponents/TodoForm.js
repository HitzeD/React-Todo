import React from 'react';
import './Todo.css'


const TodoForm = props => {
    return (
        <form className="formList" onSubmit={props.work}> 
            <input value={props.task.task} placeholder="Todo Items Here" onChange={props.clicker} name="openJobs" />
            <button className="btn" type="submit">Submit</button>
            <button className="btn del" onClick={props.removeItems} >Clear</button>
        </form>
    );
}

export default TodoForm;