import React from "react";
import ReactDOM from "react-dom/client";
//05_react
//import App from "./components/05_react/App";
//06_react
//import App from "./components/06_react/App";
//07_react
import App from "./components/07_react/App";
//07.1_react
//import App from "./components/07_react/07.1_react/App";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

