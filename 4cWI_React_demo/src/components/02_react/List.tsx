import React from "react";

interface ListProps {
  title?: string;
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const containerStyle: React.CSSProperties = {
    width: "140px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const itemStyle: React.CSSProperties = {
    backgroundColor: "#008080",
    color: "#fff",
    padding: "12px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    cursor: "pointer",
    transition: "background 0.2s ease",
  };

  return (
    <div>
      <div style={containerStyle}>
        {items.map((item, index) => (
          <div
            key={index}
            style={itemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#009c9c")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#008080")
            }
          >
            {item}
          </div>
        ))}
      </div>
      <p style={{ fontSize: "10px", marginTop: "6px" }}>inkl. Mouse-Over</p>
    </div>
  );
};

export default List;
