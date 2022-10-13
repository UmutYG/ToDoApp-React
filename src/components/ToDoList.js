import ToDo from "./ToDo";
import React from "react";
class ToDoList extends React.Component {
  render() {
    const {updateTask, editTask, deleteTask, router} = this.props
    return (
      <div className="accordion" id="mainAccordion">
        {this.props.todos.map((item, index) => {
          if (this.props.router.match.params.filter == "all" || this.props.router.match.url == "/") {
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
}

export default ToDoList;
