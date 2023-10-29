import { useReducer, createContext } from "react";
import { taskReducer } from "./taskReducer";

export const TaskContext = createContext();

function TaskProviderContext(props) {
    const [task, dispatch] = useReducer(taskReducer, null);

    return <TaskContext.Provider value={{ task, dispatch }} >
        {props.children}
    </TaskContext.Provider>
}

export default TaskProviderContext;