import React, {KeyboardEvent, useState} from 'react';

type AddItemPropsTypes = {
    id: string
    addItem: (id: string, title: string) => void
}
export const AddItem: React.FC<AddItemPropsTypes> = (
    {
        id, addItem
    }
) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    const handlerOnClickAddTask = () => {
        if (title.trim() !== "") {
            addItem(id, title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    const handlerOnChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const handlerOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('');
        if (e.charCode === 13) {
            if (title.trim() !== "") {
                addItem(id, title.trim());
                setTitle("");
            } else {
                setError("Title is required");
            }
        }
    }
    return (
        <div>
            <input value={title}
                   onChange={handlerOnChangeInputValue}
                   onKeyPress={handlerOnKeyPress}
                   className={error ? "error" : ""}
            />
            <button onClick={handlerOnClickAddTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};
