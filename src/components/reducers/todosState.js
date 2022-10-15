import React, { useReducer, useEffect } from "react";
import TodosContext from "../context/todos-context";
import todosReducer from "./todosReducer";
import TaskModel from "../TaskModel";

const TodosState = (props) => {
  const initialState = {
    todos: [
      new TaskModel(1, "Startup Task 1", "Do 1", "pending"),
      new TaskModel(2, "Startup Task 2", "Do 2", "completed"),
      new TaskModel(3, "Startup Task 3", "Do 3", "pending"),
    ],
    onEdit: null,
  };
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    let todosData;
    if (localStorage.getItem("todos") != "undefined") {
      todosData = JSON.parse(localStorage.getItem("todos"));
    }
    if (todosData) {
      // Override default todos with localstorage todos.
      dispatch({ type: "POPULATE_TODOS", todos: todosData });
    }
  }, []);

  useEffect(() => {
    // Determining if there is a change
    const jsonData = JSON.stringify(state.todos);
    localStorage.setItem("todos", jsonData);
  }, [state]);

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        onEdit: state.onEdit,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosState;
