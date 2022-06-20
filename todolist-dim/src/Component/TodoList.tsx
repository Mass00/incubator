import React from "react";
import { ITodo } from "../Interface";
import { TodoForm } from "./TodoForm";
interface TodoListProps{
    title: string,
    todos: ITodo[]
    }


export const TodoList: React.FC<TodoListProps> = ({title, todos}) => {
    return (
        <div>
            <h1>{title}</h1>
            <input type="text"></input>
            <button>+</button>

            <ul>
                <TodoForm todos={todos}/>
            </ul>
            <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            </div>
        </div>
    );
}