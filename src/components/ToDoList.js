import ToDo from "./ToDo"
import React from "react";
const ToDoList = (props) => {
  
  let filter = props.router.match.params.filter == "pending" ? false : true;
  const updated = props.todos.filter((todo)=> {
              return todo.isDone == filter;
  });
  console.log(filter);
    return (
      <div className="accordion" id="mainAccordion">
        {
           updated.map((item, index) => (
            <ToDo updateTask = {props.updateTask} editTask={props.editTask} key={index} deleteTask={props.deleteTask} task={item} />
          ))
        }
      </div>
    );
  };

  export default ToDoList;