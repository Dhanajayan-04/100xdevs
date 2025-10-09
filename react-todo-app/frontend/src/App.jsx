import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import Button from "./components/Button";


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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
     text-white flex flex-col items-center py-10">
      <div class="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-6">
        <h1 className='text-center font-bold text-5xl' >Todos</h1>
      </div>
      <div className='mt-20'>
        <CreateTodo addTodo={addTodo} />
      </div>
      <div className="flex gap-6 mt-20">
        <Button label={"All"} onClick={() => setFilter("all")} disabled={filter === "all"}>All</Button>
        <Button label={"Active"} onClick={() => setFilter("active")} disabled={filter === "active"}>Active</Button>
        <Button label={"Completed"} onClick={() => setFilter("completed")} disabled={filter === "completed"}>Completed</Button>
      </div>
      
      <Todos todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default App