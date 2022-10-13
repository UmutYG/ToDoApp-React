import React  from "react";
import TaskModel  from "./TaskModel";

const TaskControl =(props) => {
   
    const {onEdit, addTask, updateTask} = props;
    const onFormSubmit = (e) => {
      e.preventDefault();
      const header = e.target.elements.taskHeader.value.trim();
      const desc = e.target.elements.taskDescription.value.trim();
      const newTask = new TaskModel(1, header, desc, "pending");
      
      if(e.target.elements.button.textContent == "Add")
        {
          addTask(newTask);
          clearInputs(e.target.elements);
        }
        else{
           updateTask(onEdit);
           clearInputs(e.target.elements)
        }
      
    }

    const clearInputs = (element) => 
    {
      element.taskHeader.value = "";
      element.taskDescription.value = "";
    }
    
    const onChange = (e) =>
    {
      if(onEdit)
      {
        switch (e.target.name) {
          case "taskHeader":
            onEdit.taskHeader = e.target.value;
            break;
          case "taskDescription":
            onEdit.taskDescription = e.target.value;
            break;
          default:
            break;
        }
      }
    }
     
      return (
        <form onSubmit={onFormSubmit}>
          <div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add Task"
                name="taskHeader"
                id="input"
                //defaultValue={this.props.onEdit ? this.props.onEdit.taskHeader: ""}
                defaultValue={onEdit? onEdit.taskHeader: ""}
                onChange={onChange}
              />
              
              <button
                className="btn btn-outline-secondary"
                id="button-add"
                name="button" 
                type="submit">
              
                
                {onEdit ? "Edit" : "Add"}
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
                defaultValue={onEdit? onEdit.taskDescription: ""}
                onChange={onChange}

              />
            </div>
          </div>
        </form>
      );
  }
  
  export default TaskControl;