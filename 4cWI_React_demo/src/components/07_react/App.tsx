import React from "react";
import Todo from "./Todo";
import Button from "./Button";

export default function App() {
    return (
        <div>
            <h1>Todos</h1>
            
            <Todo completed={false} title="Putzen" />
            <Todo completed={false} title="Einkaufen" />
            <Todo completed={true}  title="Hausaufgaben" />

            <Button />
        </div>
    );
}


