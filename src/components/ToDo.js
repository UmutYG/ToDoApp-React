import React, { useContext }  from "react";
import TodosContext from "./context/todos-context";
const ToDo = (props) => {
  const { todo } = props;
  const {dispatch,editTask, updateStatus} = useContext(TodosContext);
  
  
  const deleteTask = (todo) => {
    dispatch({
      type:"REMOVE_TODO",
      todo:todo
    });
  }
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className= {'accordion-button collapsed bordered border-end ' + todo.isDone}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#a${todo.id}`}
            aria-expanded="false"
            >
            {todo.taskHeader }
          </button>
          <div className="icons">
            <a href="#">
              <i className="fa-solid fa-pen-to-square fa-sm" onClick={() => editTask(todo)}>
                  
              </i>
            </a>
            <a href="#">
              <i
                className="fa-solid fa-trash fa-sm"
                onClick={ ()=> deleteTask(todo) }
              ></i>
            </a>
            <a href="#" id="status">
              <i className={todo.isDone =="completed" ? "fa-solid fa-xmark" : "fa-solid fa-check" } onClick={()=>updateStatus(todo)}></i>
            </a>
          </div>
        </h2>
        <div
          id={`a${todo.id}`}
          className="accordion-collapse collapse">
          <div className="accordion-body">
            {todo.taskDescription}
          </div>
        </div>
      </div>
    );
  
  }

  
export default ToDo;


  