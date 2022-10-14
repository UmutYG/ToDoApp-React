const todosReducer = (state, action) => {
    // returned value will be setted to state.
    switch(action.type) {
      case 'POPULATE_TODOS':
        return {
          ...state,
           todos: action.todos
          }
        
      case 'ADD_TODO':
        return {
          ...state,
          todos: state.todos.concat(action.todo)
        }
      case 'REMOVE_TODO':
        return {
         todos : state.todos.filter((todo) => todo.id != action.todo.id)
        }
      case 'UPDATE_TODO':
        // Make sure we are returning same type with the state has.
        console.log(action.updated);
        return {
          todos : [...action.updated]
        }

      case 'EDIT_TODO':
        
        return {
          ...state,
          onEdit : action.todo
        }
          
      default:
        return state;
  
    }
  }

  export default todosReducer;