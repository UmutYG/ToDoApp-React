import React, { useReducer, useEffect } from "react"
import TodosContext from "../context/todos-context";
import todosReducer from "./todos"
import TaskModel from "../TaskModel";

const TodosState = (props) => {
    const initialState = {
        todos : [new TaskModel(1, "Startup Task 1", "Do 1", "pending"),new TaskModel(2, "Startup Task 2", "Do 2", "completed"),new TaskModel(3, "Startup Task 3", "Do 3", "pending")],
        onEdit : null
    }
    const [state, dispatch] = useReducer(todosReducer, initialState);

    const editTask = (todo) =>
    {
        // Filling the input fileds by getting edited todo on state.
        dispatch({type:"EDIT_TODO", todo:todo});
    }
    
    const updateTask = (todo) =>
    {   
        let change = state.todos.find(t => t.id == todo.id);
        change.taskHeader = todo.taskHeader;
        change.taskDescription = todo.taskDescription;
        change.isDone = todo.isDone;
        //change.isDone = change.isDone == "completed" ? "pending" : "completed";
        dispatch({type:"UPDATE_TODO", updated : state.todos})
    }

    const updateStatus = (todo) =>
    {   
    
        let change = state.todos.find(t => t.id == todo.id);
      
        change.isDone = change.isDone == "completed" ? "pending" : "completed";
        dispatch({type:"UPDATE_TODO", updated : state.todos})
    }


    useEffect(()=>{
        let todosData;
        if(localStorage.getItem("todos") != "undefined")
        {
           todosData  = JSON.parse(localStorage.getItem("todos"));
        }
        if (todosData) {
          // Override default todos with localstorage todos.
          dispatch({type:"POPULATE_TODOS", todos : todosData})
        }
      },[]); 
        
       useEffect(() => {
         // Determining if there is a change
          const jsonData = JSON.stringify(state.todos);
          localStorage.setItem("todos", jsonData);
        }, [state.todos]);
    

    return <TodosContext.Provider
        value = {{
            todos : state.todos,
            onEdit : state.onEdit,
            updateTask,
            updateStatus,
            editTask : editTask,
            dispatch : dispatch
            
        }}>
            {props.children}
    </TodosContext.Provider>

    }


export default TodosState