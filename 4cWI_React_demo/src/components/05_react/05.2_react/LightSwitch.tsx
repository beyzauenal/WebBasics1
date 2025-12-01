import { useState } from "react";

export default function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isOn ? "yellow" : "gray",
        minHeight: "200px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s",
        marginTop: "20px"
      }}
    >
      <div style={{ fontSize: "40px", marginBottom: "10px" }}>💡</div>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}


