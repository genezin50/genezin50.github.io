import React from "react";
import ReactDOM from "react-dom/client";
import { LaserEyesPage } from "../laser-eyes-page";
import "../styles.css";
import { setupSystemTheme } from "../theme";
import { LanguageProvider } from "../i18n";

setupSystemTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <LaserEyesPage />
    </LanguageProvider>
  </React.StrictMode>
);
