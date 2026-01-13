import React, { useState, useEffect } from 'react';

// Typ für die API-Daten
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState<string>('');

  // 1. Daten laden 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 50)); // Lädt die ersten 50 Todos
      });
  }, []);

  // 2. Konsolen-Log 
  useEffect(() => {
    console.log("search changed");
    const filtered = todos.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
    console.log(filtered);
  }, [search, todos]);

  // Filter-Logik
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10 bg-white min-h-screen font-sans text-gray-800">
      <h1 className="text-2xl font-semibold mb-2">Todos</h1>
      
      {/* Suchfeld mit gelbem Rahmen */}
      <input
        type="text"
        placeholder="add"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-48 p-1 border-2 border-yellow-500 rounded mb-10 outline-none"
      />

      {/* Das Grid-Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`p-4 border border-gray-400 h-44 flex flex-col justify-between shadow-sm transition-colors ${
              todo.completed ? 'bg-[#c6f6d5]' : 'bg-[#fed7d7]'
            }`}
          >
            <div className="space-y-2">
              <span className="text-sm text-gray-600">{todo.id}</span>
              <p className="font-medium text-[15px] leading-tight text-gray-900">
                {todo.title}
              </p>
            </div>
            <span className="text-sm font-medium">
              {todo.completed ? 'done' : 'open'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;