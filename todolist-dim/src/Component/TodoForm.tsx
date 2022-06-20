import React, { ReactNode } from "react";
import { ITodo } from "../Interface";
interface TodoFormProps {
    todos: ITodo[],
    children: React.ReactNode
}

export const TodoForm: React.FC<TodoFormProps> = ({ todos }) => {
    return (
        todos.map(item => item)  
    );
}