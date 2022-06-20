import React from "react";

interface TodoListProps {
    title: string,
    todos: TodosProps
}

export interface TodosProps {
    id: number,
    text: string,
    isDone: boolean
}
export const TodoList:React.FC<TodoListProps> = (props) => {
    return (
        <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={props.todos.isDone}/> <span>{props.todos.text}</span></li>
            <li><input type="checkbox" checked={true}/> <span>JS</span></li>
            <li><input type="checkbox" checked={false}/> <span>React</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
    );
}