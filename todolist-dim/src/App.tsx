import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Component/TodoList';
import { ITodo } from './Interface';

function App() {
  const todos: ITodo[] = [
    {
      id: 1,
      text: "HTML&CSS",
      isDone: true
    },{
      id: 2,
      text: "JS",
      isDone: false
    },{
      id: 3,
      text: "React",
      isDone: false
    }
  ]
  const todos2: ITodo[] = [
    {
      id: 1,
      text: "XLEB",
      isDone: true
    },{
      id: 2,
      text: "VODA",
      isDone: false
    },{
      id: 3,
      text: "UTKA",
      isDone: false
    }
  ]
  return (
    <div className="App">
      <TodoList title={"title"} todos={todos}/>
      <TodoList title={"title2"} todos={todos2}/>
    </div>
  );
}

export default App;
