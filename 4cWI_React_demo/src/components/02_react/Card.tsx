import React from "react";

const Card: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    width: "230px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "2px",
    overflow: "hidden",
    backgroundColor: "#fff",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    display: "block",
  };

  const contentStyle: React.CSSProperties = {
    padding: "14px 16px",
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        style={imgStyle}
      />
      <div style={contentStyle}>
        <h4 style={{ margin: 0, fontWeight: 700 }}>John Doe</h4>
        <p style={{ margin: "6px 0 0 0", color: "#555" }}>
          Architect &amp; Engineer
        </p>
      </div>
    </div>
  );
};

export default Card;
