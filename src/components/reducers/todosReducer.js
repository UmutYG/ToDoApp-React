const todosReducer = (state, action) => {
  // returned value will be setted to state.
  switch (action.type) {

    case "POPULATE_TODOS":
      return {
        ...state,
        todos: action.todos,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };

    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id != action.todo.id),
      };

    case "UPDATE_TODO":
      console.log(action.onEdit);
      let change = state.todos.find((t) => t.id == action.onEdit.id);
      change.taskHeader = action.onEdit.taskHeader;
      change.taskDescription = action.onEdit.taskDescription;
      // Make sure we are returning same type with the state has.
      return {
        ...state,
      };

    case "UPDATE_STATUS":
      let get = state.todos.find((t) => t.id == action.todo.id);
      get.isDone = get.isDone == "completed" ? "pending" : "completed";
      return {
        ...state,
      };

    case "EDIT_TODO":
      return {
        ...state,
        onEdit: action.todo,
      };

    default:
      return state;
  }
};

export default todosReducer;
