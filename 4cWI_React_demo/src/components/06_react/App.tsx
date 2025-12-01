import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [showSayHello, setShowSayHello] = useState(false);

  return (
    <div>
      <h1>Hello</h1>

      {isOn && <div>It is on</div>}
      {showSayHello && <div>Hello you</div>}

      <div className="absolute left-0 bottom-0 p-10 grid grid-rows-2 gap-2">
        <Button
          title={isOn ? "Turn off" : "Turn on"}
          onPress={() => setIsOn(!isOn)}
        />

        {!showSayHello && (
          <Button
            title="Say Hello"
            onPress={() => {
              setShowSayHello(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
