import React, {useState} from 'react';
import st from './Todolist.module.css'
import {AddItem} from "./AddItem";
import {Edit} from "./Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    IconButton,
    List,
    ListItem, ListItemButton,
    ListItemIcon,
    Stack
} from "@mui/material";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    filter: string
    title: string
    tasks: Array<TaskType>
    id: string
    onClick(value: string, taskId: string): void,
    addTask(taskId: string, title: string): void,
    onChangeSelected(id: string, checked: boolean, taskId: string): void,
    handlerChangeTitle(id: string, taskId: string, title: string): void,
    removeTask(id: string, taskId: string): void
    handlerChangeTodoTitile(todoId: string, title: string): void
}


export function Todolist(props: PropsType) {
    const addNewTask = (title: string) => {
        props.addTask(props.id, title)
    }
    const editTodoTitle = (title: string) => props.handlerChangeTodoTitile(props.id, title)
    const handlerOnClickFilterAll = () => props.onClick('All', props.id)
    const handlerOnClickFilterActive = () => props.onClick('Active', props.id)
    const handlerOnClickFilterCompleted = () => props.onClick('Completed', props.id)
    const handlerOnDclick = (taskId: string, title: string) => props.handlerChangeTitle(taskId, props.id, title)

    return <div className={st.container}>
        <div>
            <Edit handlerChangeTitle={editTodoTitle}>{props.title}</Edit>
        </div>

            <AddItem addItem={addNewTask} text={'Add task'}/>


            <List>
            {props.tasks.length ?
                props.tasks.map(i => {
                    const handlerOnClickRemoveTask = () => props.removeTask(i.id, props.id)
                    const handlerOnChangeSelected = (e: React.ChangeEvent<HTMLInputElement>) =>
                        props.onChangeSelected(i.id, e.currentTarget.checked, props.id)
                    return (
                        <ListItem
                            key={i.id}
                            alignItems="center"

                            secondaryAction={
                                <IconButton aria-label="delete" onClick={handlerOnClickRemoveTask}>
                                    <DeleteIcon fontSize="small"/>
                                </IconButton>
                            }
                            disablePadding
                            divider
                        >
                            <FormControlLabel
                                control={<Checkbox
                                    color="primary"
                                    size="small"
                                    checked={i.isDone}
                                    onChange={handlerOnChangeSelected}
                                />}
                                label={<Edit
                                    handlerChangeTitle={(title: string) => handlerOnDclick(i.id, title)}
                                >
                                    {i.title}
                                </Edit>}
                            />
                        </ListItem>
                    );
                })
                :
                <span>Пусто! - Не густо!</span>
            }
            </List>
        <div>
            <ButtonGroup  size="small" aria-label="outlined primary button group">
                <Button variant={ props.filter==='All' ? "contained" : "outlined"} className={props.filter === 'All' ? st.active : ''}
                        onClick={handlerOnClickFilterAll}>All</Button>
                <Button variant={ props.filter==='Active' ? "contained" : "outlined"} className={props.filter === 'Active' ? st.active : ''}
                        onClick={handlerOnClickFilterActive}>Active</Button>
                <Button variant={ props.filter==='Completed' ? "contained" : "outlined"}  className={props.filter === 'Completed' ? st.active : ''}
                        onClick={handlerOnClickFilterCompleted}>Completed</Button>
            </ButtonGroup>
        </div>
    </div>
}
