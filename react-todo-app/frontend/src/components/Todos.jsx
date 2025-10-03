
export function Todos({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <h1 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.title}
          </h1>
          <h2 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.description}
          </h2>
          <button onClick={() => toggleTodo(index)}>
            {todo.completed ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
