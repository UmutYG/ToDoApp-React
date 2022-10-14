const todosReducer = (state, action) => {
    // returned value will be setted to state.
    switch(action.type) {
      case 'POPULATE_TODOS':
        return action.todos;
      case 'ADD_TODO':
        return state.concat(action.todo);
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.id != action.todo.id);
      case 'UPDATE_TODO':
        // Make sure we are returning same type with the state has.
        return [...action.updated];
      default:
        throw new Error();
  
    }
  }

  export default todosReducer;