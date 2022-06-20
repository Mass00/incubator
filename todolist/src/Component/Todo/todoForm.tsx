import React from "react";

interface TodoFormProps{
    todos: any[]
}

export const TodoForm:React.FC<TodoFormProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(item => {
                return (
                <li key={item.id}><input type="checkbox" checked={item.check}/><span>{item.text}</span></li>
                );
            })}
    </ul>
    );
}