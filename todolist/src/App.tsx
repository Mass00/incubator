import React, { useState } from 'react';
import './App.css';
import {AddTodo} from "./Component/Todo/addTodo"
import {TodoForm} from "./Component/Todo/todoForm"
interface Itodo {
    id: number,
    text: string,
    check: boolean
}
const App: React.FC = () => {
    const [todos, setTodo] = useState<Itodo[]>(
        [
            {
                id: 1,
                text: "HTML&CSS",
                check: true
            },{
                id: 2,
                text: "JS",
                check: false
            }, {
                id: 3,
                text: "React",
                check: false
            }
        ]);
        function handlerClick(title:string) {
            const newTodo:Itodo = {
                id: Date.now(),
                text: title,
                check: false
            }
            setTodo( prev => [...prev, newTodo]) //
        }
    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                <AddTodo onAdd = {handlerClick}/>
                <TodoForm todos={todos}/>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default App;
