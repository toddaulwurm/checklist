import React, { useState } from 'react';

const Checklist = props => {
    const [toDo, setToDo] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        const newTask = {
            task: toDo,
            finished: false
        }
        props.onNewToDo(newTask)
    };
    return(
        <form onSubmit={handleSubmit}>
            <h1>Checklist</h1>
            <input type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Checklist;