import React, { useEffect, useState } from "react";
import Todo from "./Todo";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, title: "Einkaufsliste machen", completed: false },
    { id: 2, title: "Mathe Hausaufgabe machen", completed: false },
    { id: 3, title: "Mango kaufen gehen", completed: false },
    { id: 4, title: "Heft kaufen", completed: true },
    { id: 5, title: "Chemie lernen", completed: false },
  ]);

  return (
    <div className="">
      <h1 className="">Todos</h1>

      <div className="grid grid-cols-4 gap-2">
        {todos.map((todo) => (
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

