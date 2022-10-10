import ToDo from "./ToDo"
import React from "react";
const ToDoList = (props) => {
    return (
      <div className="accordion" id="mainAccordion">
        {props.todos.tasks.map((item, index) => (
          <ToDo key={index} deleteTask={props.deleteTask} task={item} />
        ))}
      </div>
    );
  };

  export default ToDoList;