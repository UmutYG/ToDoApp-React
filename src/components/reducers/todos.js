const todosReducer = (state, action) => {
    // returned value will be setted to state.
    switch(action.type) {
      case 'POPULATE_TODOS':
        return action.todos
      case 'ADD_TODO':
        return state.concat(action.todo)
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.id != action.todo.id)
      default:
        return state
  
    }
  }

  export default todosReducer;