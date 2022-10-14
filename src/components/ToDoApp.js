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
import TodosState from "./reducers/todosState"

const ToDoApp = () => {
    return (
        <TodosState>
          <BrowserRouter>
              <Blockquote/>
              <TaskControl/>
              <Filters/>
              <Switch>
                  <Route path="/:filter" component={ToDoList}/>
                  <Route component={ToDoList}/>
              </Switch>
            </BrowserRouter>
          </TodosState>
    );
    }
    export default ToDoApp;