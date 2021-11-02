import React from 'react';

const ToDo = (props) => {
    const notDoneStyle = {
        textDecoration: "none"
    }
    const doneStyle = {
        textDecoration: "line-through"
    }
    const checkFinished = e => {
        props.finished(e.target.value)
    }
    return ( 
        <div>
            {props.toDo.map((toDo, i)=>{
                return (<h4 key={i} style={toDo.finished ? doneStyle: notDoneStyle }>{toDo.task}<input type="checkbox" name="finished" checked={toDo.finished} onChange={checkFinished} value={i}></input></h4>)
                }
            )}
        </div>
    ); 
}
    
export default ToDo;