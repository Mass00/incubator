import React, { useState } from "react";

interface AddTodoProps{
    onAdd(title:string): void
}

export const AddTodo: React.FC<AddTodoProps> = (props) => {
    const [title, setTitile] = useState<string>('')

    return (
        <div>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitile(e.target.value)} value={title} />
            <button onClick={() => props.onAdd(title)}>+</button>
        </div>
    )
}