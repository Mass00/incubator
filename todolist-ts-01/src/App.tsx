import React from 'react';
import './App.css';
import { TodoList, TodosProps } from './TodoList';


function App() {
    const task = 
        {
            id: 1,
            text: "HTML",
            isDone: false
        }
        const task2 = 
        {
            id: 1,
            text: "HTML",
            isDone: false
        }
    return (
        <div className="App">
            <TodoList title={'TEST'} todos={task}/>
            <TodoList title={'123123'} todos = {task2}/>
        </div>
    );
}

export default App;
