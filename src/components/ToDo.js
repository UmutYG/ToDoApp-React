import React  from "react";

const ToDo = (props) => {
  const {deleteTask, editTask, task, updateTask} = props;

    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className= {'accordion-button collapsed bordered border-end ' + task.isDone}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#a${task.id}`}
            aria-expanded="false"
            >
            {task.taskHeader }
          </button>
          <div className="icons">
            <a href="#">
              <i className="fa-solid fa-pen-to-square fa-sm" onClick={() => editTask(task)}>
                  
              </i>
            </a>
            <a href="#">
              <i
                className="fa-solid fa-trash fa-sm"
                onClick={() => deleteTask(task)}
              ></i>
            </a>
            <a href="#" id="status">
              <i className={task.isDone =="completed" ? "fa-solid fa-xmark" : "fa-solid fa-check" } onClick={()=>updateTask(task)}></i>
            </a>
          </div>
        </h2>
        <div
          id={`a${task.id}`}
          className="accordion-collapse collapse">
          <div className="accordion-body">
            {task.taskDescription}
          </div>
        </div>
      </div>
    );
  
  }

  
export default ToDo;


  