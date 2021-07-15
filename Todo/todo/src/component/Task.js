import React from 'react';

import { connect } from 'react-redux';
import { useState } from 'react';
function Task(props) {
    const[value,setvalue]=useState("");
    return (
        <div>
            <input value={value} onChange={(e)=>{
                setvalue(e.target.value);
                // console.log(value);
            }}>
            </input>
            <button onClick={()=>{
            props.addTask(value);
            setvalue("");
            }}>Add</button>

  
            <ul>
                {props.taskList.map((taskObj) => {
                            return (
                            <li >
                                <p>{taskObj.task}</p>
                            <button onClick={() => { props.deleteTask(taskObj.id) }}>
                                Delete</button>
                                </li>
                            )
                        })}
                </ul>
        </div>
        
    
    )
}



const mapStateToProps = store => {
    // state variables change  
    return store;
}
// dispatch action provide to reducer
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        addTask: (value) => {
            // dispatch action 
             dispatch({ type: "add_task",
            taskName : value })
        },
        deleteTask: (value) => {
            return dispatch({ type: "delete_task" ,
        taskName: value})
        }
    }
}
// higher order function

export default  connect(mapStateToProps,mapDispatchtoProps)(Task);