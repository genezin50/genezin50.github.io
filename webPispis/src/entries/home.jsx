import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "../components";
import { developerApps } from "../siteData";
import "../styles.css";
import { setupSystemTheme } from "../theme";
import { LanguageProvider } from "../i18n";

setupSystemTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <HomePage apps={developerApps} />
    </LanguageProvider>
  </React.StrictMode>
);
