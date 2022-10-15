import React from "react"
import Filters from "./Filters"
import TaskControl from "./TaskControl"
import ToDoList from "./ToDoList"
import Blockquote from "./Blockquote"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../styles/style.css"
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