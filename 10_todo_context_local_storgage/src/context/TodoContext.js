import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: 'Todo no 1',
        completed: false,
    }],
    updateTodo: (id, todo) => {},
    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}  