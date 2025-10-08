import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {title, completed: false};
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  const updateTodo = (index, newTitle) => {
    const newTodos = [...todos];
    newTodos[index].title = newTitle;
    setTodos(newTodos);
  }

  const filteredTodos = todos.filter(todo => {
    if(filter == "active") return !todo.completed;
    if(filter == "completed") return todo.completed;
    return true; 
  })

  return (
    <div className="app-conatiner">
      <h1>Todos</h1>
      <CreateTodo addTodo={addTodo} />
      
      <div style={{margin: "10px"}}>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>All</button>
        <button onClick={() => setFilter("active")} disabled={filter === "active"}>Active</button>
        <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>Completed</button>
      </div>
      
      <Todos todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default App