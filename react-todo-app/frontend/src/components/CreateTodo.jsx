import { useState } from "react"

export function CreateTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAdd = () => {
        if(title.trim() === "" || description.trim() === ""){
            alert("Please fill in both fields!");
            return;
        }

        addTodo(title, description);
        setTitle("");
        setDescription("");
    }

    return (
    <div>
        <input 
        style={{padding: 10, margin: 10}} 
        type="text" 
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ></input> <br />
    
        <input 
        style={{padding: 10, margin: 10}} 
        type="text" 
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></input> <br />

        <button 
        style={{padding: 10, margin: 10}}
        onClick={handleAdd}
        >Add a todo
        </button>
    </div>
    )
}