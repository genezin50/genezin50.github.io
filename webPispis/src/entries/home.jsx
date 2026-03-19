import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "../components";
import { developerApps } from "../siteData";
import "../styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage apps={developerApps} />
  </React.StrictMode>
);
