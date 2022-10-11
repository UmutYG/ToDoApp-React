import React from "react"
import Filters from "./Filters"
import TaskControl from "./TaskControl"
import ToDoList from "./ToDoList"
import TaskModel from "./TaskModel"
import Blockquote from "./Blockquote"


export default class ToDoApp extends React.Component {
    constructor(props) {
      super(props);
      this.addTask = this.addTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.editTask = this.editTask.bind(this);
      this.updateTask = this.updateTask.bind(this);
      this.state = {
        tasks: [
          new TaskModel(1, "Startup Task 1", "Do 1", false),
          new TaskModel(2, "Startup Task 2", "Do 2", false),
          new TaskModel(3, "Startup Task 3", "Do 3", false),
        ],
        onEdit: null
      };
    }
    componentDidMount() {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        // Override default tasks with localstorage tasks.
        this.setState({
          tasks: tasks,
        });
      }
    }
    componentDidUpdate(prevProps, prevState) {
  
      // Determining if there is a change
      if (prevState.tasks.length !== this.state.tasks.length || 1) {
        const jsonData = JSON.stringify(this.state.tasks);
        localStorage.setItem("tasks", jsonData);
      }
    }
  
    addTask(task) {
      // Method 1
      // this.state.tasks.push(task)
      // this.setState(
      // {
      //   tasks : this.state.tasks
      // });
  
      // Method 2
      this.setState((prevState) => {
        return { tasks: prevState.tasks.concat(task) };
      });
    }
    
    editTask(task)
    {
      // Filling the input fileds by getting edited task on state.
        this.setState({onEdit : task});
     
    }

    updateTask(task)
    {
      this.state.tasks.find(t => t.id == task.id).taskHeader = task.taskHeader;
      this.state.tasks.find(t => t.id == task.id).taskDescription = task.taskDescription;
      this.setState({
        tasks: this.state.tasks
      });
    }
    deleteTask(task) {
      // get a new array
      this.setState((prevState) => {
        const updatedTasks = prevState.tasks.filter((t) => {
          return t != task;
        });
        return {
          tasks: updatedTasks,
        };
      });
    }
    render() {
      return (
        <div>
          <Blockquote/>
          <TaskControl updateTask={this.updateTask} addTask={this.addTask} onEdit={this.state.onEdit}/> <Filters />{" "}
          <ToDoList editTask={this.editTask} deleteTask={this.deleteTask} todos={this.state}  />
        </div>
      );
    }
  }