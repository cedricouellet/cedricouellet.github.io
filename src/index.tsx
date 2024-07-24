import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { LanguageService } from "./modules/core/services";
import App from "./app";

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      const lastNamespacePath = namespace.split("/").pop();
      import(
        `./locales/${namespace}/${lastNamespacePath}.translation.${language}.json`
      )
        .then((res) => callback(null, res))
        .catch((err) => {
          // by default app makes call to ./locales/translation.translation.[en|fr].json
          if (namespace !== "translation") {
            console.error(err);
          }
          callback(err, null);
        });
    })
  )
  .init({
    react: {
      useSuspense: false,
    },
    lng: LanguageService.getLanguage(),
    fallbackLng: ["en", "fr"],
    supportedLngs: ["en", "fr"],
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
