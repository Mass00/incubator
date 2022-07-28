import React, {useState} from 'react';
import {TextField} from "@mui/material";
type EditPropsTypes = {
    children: string
    handlerChangeTitle:(title: string) => void
}
export const Edit:React.FC<EditPropsTypes> = (
    {
        children,
        handlerChangeTitle
    }
) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false)
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)

    const onDoubleClick = () => {
        setInputValue(children)
        setEdit(true)
    }
    const onBlur = () => {
        inputValue.trim() && handlerChangeTitle(inputValue)
        setEdit(false)
    }
    return (
            !edit
                ?<span onDoubleClick={onDoubleClick}>{children}</span>
                :<TextField
                    // style={{width: '100px'}}
                    size="small"
                    variant="standard"
                    autoFocus
                    type={'text'}
                    value={inputValue}
                    onBlur={onBlur}
                    onChange={onChange}
                />
    );
};
