import React from "react";
import ReactDOM from "react-dom/client";
import { AppLandingPage } from "../components";
import { apps } from "../siteData";
import "../styles.css";
import { setupSystemTheme } from "../theme";
import { LanguageProvider } from "../i18n";

setupSystemTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppLandingPage app={apps["swipe-clean-photo"]} />
    </LanguageProvider>
  </React.StrictMode>
);
