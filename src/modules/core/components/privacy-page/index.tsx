import { useTranslation } from "react-i18next";
import "./index.css";

export default function Privacy() {
  const { t } = useTranslation("core/privacy-page");

  return (
    <div className="privacy-home page">
      <div className="privacy-home-content page-content">
        <h1>{t("title")}</h1>

        <p>{t("personalData")}</p>

        <p>{t("experience")}</p>

        <p>{t("browser.title")}</p>

        <ul>
          <li>{t("browser.languagePrefs")}</li>
          <li>{t("browser.policyAcceptance")}</li>
          <li>{t("browser.appData")}</li>
        </ul>

        <p>{t("thirdParty.title")}</p>
        <ul>
          <li>{t("thirdParty.analytics")}</li>
        </ul>
      </div>
    </div>
  );
}
