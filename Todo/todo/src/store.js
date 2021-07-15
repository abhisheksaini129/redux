import { createStore } from "redux";

let initialState= {
    taskList: []
   
}
function TaskAdder(state=initialState,action){
    switch(action.type){
        case "add_task":
            
            let tempArr = [...state.taskList,{task:action.taskName,id:state.taskList.length}]
             return {
               taskList: tempArr
            }
            
        case "delete_task":
            let taskobj=action.taskName;
            let temp = state.taskList.filter(function (task){
                return task.id!=taskobj;              
            })
             return {
               taskList: temp
            }
            
        default: 
        return initialState;
    }
}
const store = createStore(TaskAdder);
export default store;