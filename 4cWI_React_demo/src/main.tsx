import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./components/02_react/App.tsx";

import "./index.css";
// import App from "./components/02_react/02.1_react/App.tsx";
import App from "./components/05_react/05.1_react/App.tsx";




ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
