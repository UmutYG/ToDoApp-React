import React  from "react";
import TaskModel  from "./TaskModel";

export default class TaskControl extends React.Component {
    constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e) {
      e.preventDefault();
      const header = e.target.elements.taskHeader.value.trim();
      const desc = e.target.elements.taskDescription.value.trim();
      const newTask = new TaskModel(header, desc);
      this.props.addTask(newTask);
    }
  
    render() {
      return (
        <form onSubmit={this.onFormSubmit}>
          <div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add Task"
                name="taskHeader"
                id="input"
              />
              <button
                className="btn btn-outline-secondary"
                onClick={this.preparetoAdd}
                id="button-add"
              >
                Add
              </button>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add Description"
                name="taskDescription"
                id="inputDesc"
              />
            </div>
          </div>
        </form>
      );
    }
  }