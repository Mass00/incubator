import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";
import {AddItem} from "./AddItem";
import {AppBar, Container, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()
    const [todolist, setTodoList] = useState([
        {id: todolistId1, title: 'Was muss ich lernen?', filter: 'All'},
        {id: todolistId2, title: 'Was soll ich kaufen?', filter: 'Active'}
    ])
    const [todoListTasks, setTodoListTasks] = useState(
        {
            [todolistId1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false}
            ],
            [todolistId2]: [
                {id: v1(), title: "die Katze", isDone: true},
                {id: v1(), title: "der Hund", isDone: true},
                {id: v1(), title: "das Reh", isDone: false}
            ]

        }
    )


    const handlerFilter = (value: string, tasksId: string) => {
        setTodoList(prev => [...prev].map(i => i.id === tasksId ? {...i, filter: value} : i))
    }
    const handlerCheckboxChecked = (id: string, checked: boolean, taskId: string) => {
        setTodoListTasks(prev => ({
            ...prev,
            [taskId]: [...todoListTasks[taskId]].map(i => i.id === id ? {...i, isDone: checked} : i)
        }))
    }
    const handlerChangeTitle = (id: string, taskId: string, title: string) => {
        setTodoListTasks(prev => ({
            ...prev,
            [taskId]: [...todoListTasks[taskId]].map(i => i.id === id ? {...i, title} : i)
        }))
    }
    const handlerAddTask = (taskId: string, title: string) => {
        const tempId = v1()
        setTodoListTasks(prev => ({...prev, [taskId]: [...todoListTasks[taskId], {id: tempId, title, isDone: false}]}))

    }
    const handlerChangeTodoTitile = (todoId: string, title: string) => {
        setTodoList(prev => [...prev].map(item => item.id === todoId ? {...item, title} : item))
    }
    const handlerRemoveTask = (id: string, taskId: string) => {
        setTodoListTasks(prev => ({...prev, [taskId]: [...todoListTasks[taskId]].filter(i => i.id !== id)}))
    }
    const addTodo = (title: string) => {
        const tempId = v1()
        setTodoList(prev => ([...prev, {id: tempId, title, filter: 'All'}]))
        setTodoListTasks(prev => ({...prev, [tempId]: []}))
    }
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        TodoLists
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{padding: '20px'}}
                >
                    <Grid item>
                        <AddItem addItem={addTodo} text={''}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>

                    {todolist.map(i => {
                        let filtredTasks = todoListTasks[i.id]
                        if (i.filter === 'Active') filtredTasks = todoListTasks[i.id].filter(i => !i.isDone)
                        if (i.filter === 'Completed') filtredTasks = todoListTasks[i.id].filter(i => i.isDone)

                        return <Grid item>
                            <Paper style={{padding: '15px'}}>
                                <Todolist
                                    key={i.id}
                                    id={i.id}
                                    filter={i.filter}
                                    title={i.title}
                                    tasks={filtredTasks}
                                    removeTask={handlerRemoveTask}
                                    onClick={handlerFilter}
                                    addTask={handlerAddTask}
                                    onChangeSelected={handlerCheckboxChecked}
                                    handlerChangeTitle={handlerChangeTitle}
                                    handlerChangeTodoTitile={handlerChangeTodoTitile}
                                />
                            </Paper>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
