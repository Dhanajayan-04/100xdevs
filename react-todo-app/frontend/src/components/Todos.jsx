
export function Todos({ todos, toggleTodo, removeTodo, updateTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <h1 style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            contentEditable suppressContentEditableWarning={true}
            onBlur={(e) => updateTodo(index, e.target.innerText)}>
            {todo.title}
          </h1>
          <button onClick={() => toggleTodo(index)}>
            {todo.completed ? "Completed" : "Mark as Complete"}
          </button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
