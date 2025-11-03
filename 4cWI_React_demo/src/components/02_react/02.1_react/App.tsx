import Card from "./Card";


export default function App() {
  return (
    <div className="flex gap-4 p-4">
      <Card name="Hans" description="Du bist super!" />
      <Card name="Paul" description="Du bist super!" />
      <Card name="Susi" description="Du bist super!" />
      <Card name="Sepp" description="Du bist super!" />
    </div>
  );
}
