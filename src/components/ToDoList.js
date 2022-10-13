import ToDo from "./ToDo";
import React from "react";
const ToDoList = (props) => {
    const {updateTask, editTask, deleteTask, router, todos} = props;
    

    return (
      <div className="accordion" id="mainAccordion">
        {todos.map((item, index) => {
         
          if (router.match.params.filter == "all" || props.router.match.url == "/") {
            return (
              <ToDo
                updateTask={updateTask}
                editTask={editTask}
                key={index}
                deleteTask={deleteTask}
                task={item}
              />
            );
          } else {
            if (item.isDone == router.match.params.filter) {
              return (
                <ToDo
                  updateTask={updateTask}
                  editTask={editTask}
                  key={index}
                  deleteTask={deleteTask}
                  task={item}
                />
              );
            }
          }
        })}
      </div>
    );
  
}

export default ToDoList;
