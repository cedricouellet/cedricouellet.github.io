import translations from "../../../../assets/translations.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function configureI18n() {
  i18n.use(initReactI18next).init({
    resources: translations,
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });
}

const config = {
  configureI18n,
};

export default config;
export { configureI18n };
