import React from "react";
import ReactDOM from "react-dom/client";
//05_react
//import App from "./components/05_react/App.tsx";
//06_react
import App from "./components/06_react/App.tsx";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
