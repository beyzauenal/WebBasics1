import React, { useEffect, useState } from "react";
import Todo from "./Todo";

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json: TodoItem[]) => {
        setTodos(json);
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      <div className="grid grid-cols-1 gap-2">
        {todos.map((todo: TodoItem) => (
          <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
}
