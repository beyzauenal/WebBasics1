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
    <div className="">
      <h1 className="">Todos</h1>
      test  
      <div className="grid grid-cols-4 gap-2">
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

