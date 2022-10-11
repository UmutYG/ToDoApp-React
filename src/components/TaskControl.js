import React  from "react";
import TaskModel  from "./TaskModel";

export default class TaskControl extends React.Component {
    constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
     
    }
   
    onFormSubmit(e) {
      e.preventDefault();
      const header = e.target.elements.taskHeader.value.trim();
      const desc = e.target.elements.taskDescription.value.trim();
      const newTask = new TaskModel(1, header, desc, false);
      
      if(e.target.elements.button.textContent == "Add")
        {
          this.props.addTask(newTask);
          this.clearInputs(e.target.elements)
        }
        else{
           this.props.updateTask(this.props.onEdit);
           this.clearInputs(e.target.elements)
        }
      
    }

    clearInputs(element)
    {
      element.taskHeader.value = "";
      element.taskDescription.value = "";
    }
    
    onChange(e)
    {
      if(this.props.onEdit)
      {
        switch (e.target.name) {
          case "taskHeader":
            this.props.onEdit.taskHeader = e.target.value;
            break;
          case "taskDescription":
            this.props.onEdit.taskDescription = e.target.value;
            break;
          default:
            break;
        }
      }
      


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
                //defaultValue={this.props.onEdit ? this.props.onEdit.taskHeader: ""}
                defaultValue={this.props.onEdit? this.props.onEdit.taskHeader: ""}
                onChange={this.onChange}
              />
              
              <button
                className="btn btn-outline-secondary"
                id="button-add"
                name="button" 
                type="submit">
              
                
                {this.props.onEdit ? "Edit" : "Add"}
              </button>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add Description"
                name="taskDescription"
                id="inputDesc"
                //defaultValue={this.props.onEdit ? this.props.onEdit.taskDescription: ""}
                defaultValue={this.props.onEdit? this.props.onEdit.taskDescription: ""}
                onChange={this.onChange}

              />
            </div>
          </div>
        </form>
      );
    }
  }