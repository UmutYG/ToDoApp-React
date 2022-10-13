import React, { useEffect, useState } from "react"
import Filters from "./Filters"
import TaskControl from "./TaskControl"
import ToDoList from "./ToDoList"

import TaskModel from "./TaskModel"
import Blockquote from "./Blockquote"


import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"
import "../styles/style.css"
import LogInControl from "./LogInControl"

const ToDoApp = (props) => {
    const [tasks, setTasks] = useState([
      new TaskModel(1, "Startup Task 1", "Do 1", "pending"),
      new TaskModel(2, "Startup Task 2", "Do 2", "completed"),
      new TaskModel(3, "Startup Task 3", "Do 3", "pending")
    ]);
    const [onEdit, setOnEdit] = useState(null);
    
    
    useEffect(()=>{
  
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        
        // Override default tasks with localstorage tasks.
        setTasks(tasks);
      }
    },[]); 
      
     useEffect((prevState)=>{
       // Determining if there is a change
       if (tasks.length !== tasks.length || 1) {
        const jsonData = JSON.stringify(tasks);
        localStorage.setItem("tasks", jsonData);
      }}, [tasks]);

  
    const addTask = (task) => {
      setTasks(tasks.concat(task));
    }
    
    const editTask = (task) =>
    {
      // Filling the input fileds by getting edited task on state.
        setOnEdit(task);
    }

    const updateTask = (task) =>
    {
      let change = tasks.find(t => t.id == task.id);
      change.taskHeader = task.taskHeader;
      change.taskDescription = task.taskDescription;

      change.isDone = change.isDone == "completed" ? "pending" : "completed";
      setTasks(tasks);
    }

    
    const deleteTask = (task) => {
      const updatedTasks = tasks.filter((t) => {
        return t != task;
      });
      // get a new array
      setTasks(updatedTasks);
    }
  
    return (
        <BrowserRouter>
            <Blockquote/>
            <TaskControl updateTask={updateTask} addTask={addTask} onEdit={onEdit}/>
            <Filters/>
            <Switch>
                <Route path="/:filter" render = { router => (
                  <>
                    <ToDoList updateTask = {updateTask} router = {router} editTask={editTask} deleteTask={deleteTask} todos={tasks}/>
                  </>
                )
                }  />
                <Route render = { router => (
                  <>
                    <ToDoList updateTask = {updateTask} router = {router} editTask={editTask} deleteTask={deleteTask} todos={tasks}/>
                  </>
                )
                }  />
            </Switch>
        </BrowserRouter>
    );
    }
    export default ToDoApp;