import React, { useEffect, useReducer, useState } from "react"
import Filters from "./Filters"
import TaskControl from "./TaskControl"
import ToDoList from "./ToDoList"
import todosReducer from "./reducers/todos"
import TaskModel from "./TaskModel"
import Blockquote from "./Blockquote"
import TodosContext from "./context/todos-context"

import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"
import "../styles/style.css"
import LogInControl from "./LogInControl"


const ToDoApp = (props) => {

    const [todos, dispatch] = useReducer(todosReducer, );
    const [onEdit, setOnEdit] = useState(null);
    
    useEffect(()=>{
      const todosData = JSON.parse(localStorage.getItem("todos"));
      if (todosData) {
        // Override default todos with localstorage todos.
        dispatch({type:"POPULATE_TODOS", todos : todosData})
      }
    },[]); 
      
     useEffect(() => {
       // Determining if there is a change
        const jsonData = JSON.stringify(todos);
        localStorage.setItem("todos", jsonData);
      }, [todos]);

    const editTask = (todo) =>
    {
      // Filling the input fileds by getting edited task on state.
      setOnEdit(todo);
    }

    const updateTask = (task) =>
    {
      let change = todos.find(t => t.id == task.id);
      change.taskHeader = task.taskHeader;
      change.taskDescription = task.taskDescription;
     
      change.isDone = change.isDone == "completed" ? "pending" : "completed";
      dispatch({type:"UPDATE_TODO", updated : todos})
      
    }

  
    return (
      <TodosContext.Provider value={{todos, dispatch, updateTask, editTask, onEdit}}>
          <BrowserRouter>
              <Blockquote/>
              <TaskControl/>
              <Filters/>
              <Switch>
                  <Route path="/:filter" component={ToDoList}/>
                  <Route component={ToDoList}/>
              </Switch>
            </BrowserRouter>
        </TodosContext.Provider>
    );
    }
    export default ToDoApp;