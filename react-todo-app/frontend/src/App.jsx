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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

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

  return (
    <div className="app-conatiner">
      <h1>Todos</h1>
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default App