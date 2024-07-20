import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import Router from "./Router";

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./locales/${language}/${namespace}.json`)
        .then((res) => callback(null, res))
        .catch((err) => {
          console.error(err);
          callback(err, null);
        });
    })
  )
  .init({
    fallbackLng: ["en", "fr"],
    supportedLngs: ["en", "fr"],
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
