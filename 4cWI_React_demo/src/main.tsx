import "./firebase";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//05_react
//import App from "./components/05_react/App";
//06_react
//import App from "./components/06_react/App";
//07_react
//import App from "./components/07_react/App"; 
//07.1_react
//import App from "./components/07_react/07.1_react/App";
//07.2_react
//import App from "./components/07_react/07.2_react/App";
//PG_react
//import App from "./components/PG_react/App";
//08_react
//import App from "./components/08_react/App";
//09_react
//import App from "./components/09_react/App";

import "./index.css";
import App from "./components/10_firebase/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

