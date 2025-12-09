import React, { useEffect, useState } from "react";

interface Person {
  id: number;
  name: string;
  age: number;
  city: string;
}

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/people")
      .then((res) => res.json())
      .then((json) => setPeople(json));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Personenliste</h1>

      <div className="grid grid-cols-3 gap-4">
        {people.map((person) => (
          <div key={person.id} className="border p-4 rounded shadow">
            <div>Name: {person.name}</div>
            <div>Alter: {person.age}</div>
            <div>Wohnort: {person.city}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
