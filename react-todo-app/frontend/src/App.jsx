import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title, description) => {
    const newTodo = {title, description, completed: false};
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="app-conatiner">
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App