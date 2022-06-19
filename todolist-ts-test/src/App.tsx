import React, { useState, useEffect } from 'react';
import './App.css';

function App(props: any) {
    const [todos, setTodo] = useState([
        {
            id: 1,
            text: "HTML&CSS",
            check: true
        }, {
            id: 2,
            text: "JS",
            check: false
        }, {
            id: 3,
            text: "React",
            check: false
        }
    ]);
    const [filtred, filterTodos] = useState(todos);
    const [value, setValue] = useState('');
    useEffect(() => filterTodos(todos),[todos])

    function filterTodo(status: any) {
        if (status === "All") {
            filterTodos(todos)
        } else {
            const temp = todos.filter(x => x.check === status)
            filterTodos(temp)
        }
    }
    function handlerAddTodos() {
        setTodo(
            [...todos, {
                id: todos.length + 1,
                text: value,
                check: false
            }]);

    }
    function handlerDeleteTodo(id: any){
        const temp = [...todos].filter((x)=> x.id !== id);
        setTodo(temp)
    }
    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                <div>
                    <input onChange={(e) => setValue(e.target.value)} value={value} />
                    <button onClick={handlerAddTodos}>+</button>
                </div>
                <ul>
                    {filtred.map(x => (
                        <>
                        <li key={x.id}><div className='todo'><input type="checkbox" checked={x.check} />
                        <span className='todo'>{x.text}</span>
                        <button className='todo' onClick={() => handlerDeleteTodo(x.id)}>X</button></div></li>
                        </>
                    ))}
                </ul>
                <div>
                    <button onClick={() => filterTodo("All")}>All</button>
                    <button onClick={() => filterTodo(false)}>Active</button>
                    <button onClick={() => filterTodo(true)} >Completed</button>
                </div>
            </div>
        </div>
    );
}

export default App;
