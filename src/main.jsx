import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import ProjectProvider from "./context/ProjectProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProjectProvider>
    <Router>
      <App />
    </Router>
  </ProjectProvider>
);
