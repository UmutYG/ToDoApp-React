import React  from "react";

export default class ToDo extends React.Component {
    constructor(props) {
      super(props);
      this.deleteTask = this.deleteTask.bind(this);
      this.editTask = this.editTask.bind(this);
    }
    deleteTask() {
      this.props.deleteTask(this.props.task);
    }
    editTask() {
      this.props.editTask(this.props.task);

    }
    render() {
      
      return (
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className= 'accordion-button'
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#a${task.TaskId}"
              aria-expanded="true"
              aria-controls="collapseOne"
              >
              {this.props.task.taskHeader }
            </button>
            <div className="icons">
              <a href="#">
                <i className="fa-solid fa-pen-to-square fa-sm" onClick={this.editTask}>
                    
                </i>
              </a>
              <a href="#">
                <i
                  className="fa-solid fa-trash fa-sm"
                  onClick={this.deleteTask}
                ></i>
              </a>
              <a href="#" id="status">
                <i className={this.props.task.isDone =="completed" ? "fa-solid fa-xmark" : "fa-solid fa-check" } onClick={()=>this.props.updateTask(this.props.task)}></i>
                
              </a>
            </div>
          </h2>
          <div
            id="a${task.id}"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {this.props.task.taskDescription}
            </div>
          </div>
        </div>
      );
    }
  }


  