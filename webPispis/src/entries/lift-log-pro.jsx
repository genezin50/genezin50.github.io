import React from "react";
import ReactDOM from "react-dom/client";
import { LiftLogPage } from "../liftlog-page";
import "../styles.css";
import { setupSystemTheme } from "../theme";
import { LanguageProvider } from "../i18n";

setupSystemTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <LiftLogPage />
    </LanguageProvider>
  </React.StrictMode>
);
