import { useReducer } from "react"
import TodosContext from "../context/todos-context";
import todosReducer from "./todos"


const TodoState = (props) => {
    const initialState = {
        todos : [new TaskModel(1, "Startup Task 1", "Do 1", "pending"),new TaskModel(2, "Startup Task 2", "Do 2", "completed"),new TaskModel(3, "Startup Task 3", "Do 3", "pending")],
        onEdit : null
    }
}

const [state, dispatch] = useReducer(todosReducer, initialState);

return <TodosContext.Provider
    value = {{
        todos : state.todos,
        onEdit : state.onEdit
        
    }}>
        {props.children}
</TodosContext.Provider>

export default TodoState