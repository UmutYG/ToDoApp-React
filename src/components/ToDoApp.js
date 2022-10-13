import React, { useEffect, useReducer, useState } from "react"
import Filters from "./Filters"
import TaskControl from "./TaskControl"
import ToDoList from "./ToDoList"

import TaskModel from "./TaskModel"
import Blockquote from "./Blockquote"


import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"
import "../styles/style.css"
import LogInControl from "./LogInControl"

const notesReducer = (state, action) => {
  // returned value will be setted to state.
  switch(action.type) {
    case 'POPULATE_TODOS':
      return action.todos
    case 'ADD_TODO':
      return state.todos.concat(action.task)
    case 'REMOVE_TODO':
      return state.filter((task) => task.id != action.task.id)
    default:
      return state

  }
}
const ToDoApp = (props) => {
    // const [todos, setTasks] = useState([
    //   new TaskModel(1, "Startup Task 1", "Do 1", "pending"),
    //   new TaskModel(2, "Startup Task 2", "Do 2", "completed"),
    //   new TaskModel(3, "Startup Task 3", "Do 3", "pending")
    // ]);
    const [todos, dispatch] = useReducer(notesReducer, [new TaskModel(1, "Startup Task 1", "Do 1", "pending"),new TaskModel(2, "Startup Task 2", "Do 2", "completed"),new TaskModel(3, "Startup Task 3", "Do 3", "pending")]);
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
       if (todos.length !== todos.length || 1) {
        const jsonData = JSON.stringify(todos);
        localStorage.setItem("todos", jsonData);
      }}, [todos]);

  
    const addTask = (todo) => {
      dispatch({
        type:'ADD_TODO',
        task:todo
      });
    }
    
    const editTask = (task) =>
    {
      // Filling the input fileds by getting edited task on state.
        setOnEdit(task);
    }

    const updateTask = (task) =>
    {
      let change = todos.find(t => t.id == task.id);
      change.taskHeader = task.taskHeader;
      change.taskDescription = task.taskDescription;

      change.isDone = change.isDone == "completed" ? "pending" : "completed";
      dispatch({});
      
    }

    
    const deleteTask = (todo) => {
      dispatch({
        type:"REMOVE_TODO",
        task:todo
      });
    }
  
    return (
        <BrowserRouter>
            <Blockquote/>
            <TaskControl updateTask={updateTask} addTask={addTask} onEdit={onEdit}/>
            <Filters/>
            <Switch>
                <Route path="/:filter" render = { router => (
                  <>
                    <ToDoList updateTask = {updateTask} router = {router} editTask={editTask} deleteTask={deleteTask} todos={todos}/>
                  </>
                )
                }  />
                <Route render = { router => (
                  <>
                    <ToDoList updateTask = {updateTask} router = {router} editTask={editTask} deleteTask={deleteTask} todos={todos}/>
                  </>
                )
                }  />
            </Switch>
        </BrowserRouter>
    );
    }
    export default ToDoApp;