import React, { useState } from "react";
import List from "./List";
import Card from "./Card";

const App: React.FC = () => {
  // Mein Einkauf
  const [items] = useState<string[]>([
    "Milch",
    "Brot",
    "Eier",
    "Käse",
  ]);

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseGreen = "#4CAF50";
  const hoverGrey = "#e0e0e0";

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isActive ? baseGreen : isHover ? hoverGrey : baseGreen,
    color: isHover ? "#000" : "#fff",
    border: "none",
    padding: "10px 30px",
    cursor: "pointer",
    borderRadius: "2px",
    fontWeight: 500,
    transition: "all 0.2s ease",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h3>Liste</h3>
      <List title="List" items={items} />

      <div style={{ height: "30px" }} />

      <h3>Button</h3>
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          setIsActive(false);
        }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
      >
        Sendar
      </button>

      <div style={{ height: "40px" }} />

      <h3>Card</h3>
      <Card />
    </div>
  );
};

export default App;
