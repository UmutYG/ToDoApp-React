
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

class ToDoApp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
        taskHeader: "deneme1", 
        taskDescription :"deneme2"
      
      
    }
  }
  addTask(task)
  {
    
  }
  render()
  {
    return (
      <div>
        <PageHeader/> <TaskControl /> <Filters/> <ToDoList todos={this.state}/>
      </div>
    )
  }
}


class TaskControl extends React.Component
{
  
  render()
  {
    return (
      <div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add Task" aria-label="Recipient's username" id="input"/>
            <button className="btn btn-outline-secondary" type="button" id="button-add">Add</button>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control"  placeholder="Add Description" aria-label="Recipient's username" id="inputDesc"/>
        </div>
      </div> 
    )
    
  }
}


const PageHeader = function()
{
  return (
    <p className="card-text fs-4" >ToDoApp</p>
  )
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



class ToDoList extends React.Component
{
  render()
  {

    return(
      
      <div className="accordion" id="mainAccordion">
        <ToDo taskHeader={this.props.todos.taskHeader} description={this.props.todos.taskDescription}/>
      </div>
    );
  }
}

class ToDo extends React.Component
{
  render()
  {
    
    return(
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a${task.TaskId}" aria-expanded="true" aria-controls="collapseOne">
              {this.props.taskHeader}
            </button>
            <div className="icons">
                <a href="#" ><i className="fa-solid fa-pen-to-square fa-sm"></i></a>
                <a href="#" ><i className="fa-solid fa-trash fa-sm"></i></a>
                <a href="#" id="status" ><i className="${statusIcon}"></i></a>
                
            </div> 
        </h2>
        <div id="a${task.id}" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {this.props.description}
            </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<ToDoApp/>,root);
