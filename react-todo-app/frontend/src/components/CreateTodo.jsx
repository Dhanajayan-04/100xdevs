import { useState } from "react"

export function CreateTodo({addTodo}) {
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        if(title.trim() === ""){
            alert("Please fill in the fields!");
            return;
        }

        addTodo(title);
        setTitle("");
    }

    return (
    <div>
        <input 
        style={{padding: 10, margin: 10}} 
        type="text" 
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ></input> <br />

        <button 
        style={{padding: 10, margin: 10}}
        onClick={handleAdd}
        >Add a todo
        </button>
    </div>
    )
}