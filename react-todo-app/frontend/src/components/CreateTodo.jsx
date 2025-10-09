import { useState } from "react"
import Button from "./Button";

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
    <div className="flex gap-6 w-full justify-center">
        <input 
        className="bg-gray-700 py-2 px-4 rounded-xl outline-non"
        type="text" 
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ></input> <br />

        <Button onClick={handleAdd} label={"Add a todo"} btnColor="blue" >
        </Button>
    </div>
    )
}