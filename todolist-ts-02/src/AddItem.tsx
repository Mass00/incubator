import React, {useState} from 'react';
import st from "./Todolist.module.css";
import {IconButton, TextField} from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
type AddItemPropsTypes = {
    text: string
    addItem: (title: string) => void
}
export const AddItem:React.FC<AddItemPropsTypes> = (
    {
         text ,addItem
    }
) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)
    const handlerOnClickAddItem = () => {
        if(inputValue.trim()){
            addItem( inputValue)
            setInputValue('')
            setError('')
        }else {
            setError('Title is required')
        }

    }
    return (
        <div>
            <TextField
                id="standard-basic"
                label={text}
                variant="standard"
                error={!!error}
                helperText={error}
                className={error ? st.error : st.border}
                value={inputValue}
                onChange={handlerOnChange}
            />
            <IconButton onClick={handlerOnClickAddItem} >
                <AddCircleRoundedIcon color={"primary"}/>
            </IconButton>
        </div>

    );
};