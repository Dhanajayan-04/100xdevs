
export function Todos({ todos, toggleTodo, removeTodo, updateTodo }) {
  return (
    <div className="py-10 flex flex-col items-center gap-4">
      {todos.map((todo, index) => (
        <div key={index} className={`todo-item flex items-center gap-12 p-4 rounded-md w-full max-w-md`} >
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} 
              className="w-5 h-5 cursor-pointer" />
          <h1 style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            contentEditable suppressContentEditableWarning={true}
            onBlur={(e) => updateTodo(index, e.target.innerText)}
            className="flex-1 outline-none bg-gray-700 font-medium rounded-md px-20 py-2" >{todo.title}</h1>
          <button className="py-2 px-4 font-medium text-black bg-red-500 rounded-md hover:bg-red-600 transition-colors"
            onClick={() => removeTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
