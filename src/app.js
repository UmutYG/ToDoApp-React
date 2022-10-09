
// class Blockquote extends React.Component
// {
//   render()
//   {
//     const request = new XMLHttpRequest();
//     request.open("GET",'https://programming-quotes-api.herokuapp.com/quotes/random');
//     request.send();

//     // callback
//     request.addEventListener('load', ()=>{
//         const data = JSON.parse(request.responseText);
//         console.log(data);
//         return <div>
//                 <blockquote className="blockquote text-center">
//                       <p className="mt-1" id="quote">
//                         {data.en}
//                       </p>
//                       <footer className="blockquote-footer mt-2" id="author"><cite title="Source Title"></cite></footer>
//                     </blockquote>
//               </div> 
//   });
// }

// }
class TaskModel
{
  constructor(taskHeader, taskDescription)
  {
    this.taskHeader = taskHeader;
    this.taskDescription = taskDescription;
  }
}

class ToDoApp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      tasks:
      [
        new TaskModel("deneme1","deneme2")
      ]
  }
  }

  addTask(task)
  {
    // Method 1
      // this.state.tasks.push(task)
      // this.setState(
      // {
      //   tasks : this.state.tasks
      // });
    
    // Method 2
    this.setState((prevState) => {
      return { tasks: prevState.tasks.concat(task)}
    });
    
  }

  deleteTask(task)
  {
    // get a new array
    this.setState((prevState)=>{
      const updatedTasks = prevState.tasks.filter((t) => {
        return t != task;
      })
      return {
        tasks : updatedTasks
      }
    })
  }
  render()
  {
    return (
      <div>
        <PageHeader/> <TaskControl addTask={this.addTask}/> <Filters/> <ToDoList deleteTask={this.deleteTask} todos={this.state}/>
      </div>
    )
  }
}


class TaskControl extends React.Component
{
constructor(props)
{
  super(props);
  this.onFormSubmit = this.onFormSubmit.bind(this);
}
  onFormSubmit(e){
    e.preventDefault();
    const header = e.target.elements.taskHeader.value.trim();
    const desc = e.target.elements.taskDescription.value.trim();
    const newTask = new TaskModel(header,desc);
    this.props.addTask(newTask);
  }
  
  render()
  {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Add Task" name="taskHeader" id="input"/>
              <button  className="btn btn-outline-secondary" onClick={this.preparetoAdd}  id="button-add">Add</button>
          </div> 
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add Description" name="taskDescription" id="inputDesc"/>
          </div>
        </div> 
      </form>
    )
    
    
  }
}


class ToDoList extends React.Component
{
  render()
  {
    
    return (
      <div className="accordion" id="mainAccordion">
        {
            this.props.todos.tasks.map((item,index) =>
              <ToDo key={index} deleteTask={this.props.deleteTask} task={item}/>
            )
        }
      </div>
    );
  }
}

class ToDo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }
  deleteTask()
    {
      this.props.deleteTask(this.props.task)
    }
  render()
  {
    
    
    return(
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a${task.TaskId}" aria-expanded="true" aria-controls="collapseOne">
              {this.props.task.taskHeader}
            </button>
            <div className="icons">
                <a href="#" ><i className="fa-solid fa-pen-to-square fa-sm"></i></a>
                <a href="#" ><i className="fa-solid fa-trash fa-sm" onClick={this.deleteTask}></i></a>
                <a href="#" id="status" ><i className="${statusIcon}"></i></a>
                
            </div> 
        </h2>
        <div id="a${task.id}" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {this.props.task.taskDescription}
            </div>
        </div>
      </div>
    )
  }
}


class Filters extends React.Component
{
  render()
  {
    return(
      <ul className="list-group list-group-horizontal mb-3">
        <li className="list-group-item"><a href="#">All</a></li>
        <li className="list-group-item"><a href="#">Pending</a></li>
        <li className="list-group-item"><a href="#">Completed</a></li>
    </ul>
    );
  }
}

const PageHeader = function()
{
  return (
    <p className="card-text fs-4" >ToDoApp</p>
  )
}

ReactDOM.render(<ToDoApp/>,root);
