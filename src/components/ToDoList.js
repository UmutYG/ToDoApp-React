import ToDo from "./ToDo";
import React from "react";
import TodosContext from "./context/todos-context";
import { useContext } from "react";
const ToDoList = (props) => {
  
    const {todos} = useContext(TodosContext);
    return (
      <div className="accordion" id="mainAccordion">
        {todos.map((todo, index) => {
          if (props.match.params.filter == "all" || props.match.url == "/") {
            return (
              <ToDo
                key={index}
                todo={todo}
              />
            );
          } else {
            if (todo.isDone == props.match.params.filter) {
              return (
                <ToDo
                  key={index}
                  todo={todo}
                />
              );
            }
          }
        })}
      </div>
    );
  
}

export default ToDoList;
