import React from "react"
import Filters from "./Filters"
import TaskControl from "./TaskControl"
import ToDoList from "./ToDoList"
import TaskModel from "./TaskModel"


export default class ToDoApp extends React.Component {
    constructor(props) {
      super(props);
      this.addTask = this.addTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.state = {
        tasks: [
          new TaskModel("Startup Task 1", "Do 1"),
          new TaskModel("Startup Task 2", "Do 2"),
          new TaskModel("Startup Task 3", "Do 3"),
        ],
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
      if (prevState.tasks.length !== this.state.tasks.length) {
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
          <TaskControl addTask={this.addTask} /> <Filters />{" "}
          <ToDoList deleteTask={this.deleteTask} todos={this.state} />
        </div>
      );
    }
  }