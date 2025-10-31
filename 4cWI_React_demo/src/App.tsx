import List from "./components/List";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial", display: "grid", gap: "24px", maxWidth: 900 }}>
      <List />
      <Button />
      <Card />
    </div>
  );
}
