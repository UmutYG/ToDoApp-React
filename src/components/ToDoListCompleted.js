import ToDo from "./ToDo"
import React from "react";
const ToDoListCompleted = (props) => {
  
    return (
      <div className="accordion" id="mainAccordion">
          {props.todos.map((item, index) => (
            <ToDo editTask={props.editTask} key={index} deleteTask={props.deleteTask} task={item} />
          ))}
      </div>
    );
  };

  export default ToDoListCompleted;