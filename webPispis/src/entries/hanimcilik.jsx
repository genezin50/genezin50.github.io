import React from "react";
import ReactDOM from "react-dom/client";
import { AppLandingPage } from "../components";
import { apps } from "../siteData";
import "../styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppLandingPage app={apps.hanimcilik} />
  </React.StrictMode>
);
