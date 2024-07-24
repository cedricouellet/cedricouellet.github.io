import { useTranslation } from "react-i18next";
import "./home.component.css";

export default function Home() {
  const { t } = useTranslation("privacy/home");

  return (
    <div className="privacy-home">
      <div className="privacy-home-content">
        <h1 className="privacy-home-title">{t("title")}</h1>

        <p>{t("personalData")}</p>

        <p>{t("experience")}</p>

        <p>{t("browser.title")}</p>

        <ul>
          <li>{t("browser.languagePrefs")}</li>
          <li>{t("browser.policyAcceptance")}</li>
        </ul>

        <p>{t("thirdParty.title")}</p>
        <ul>
          <li>{t("thirdParty.analytics")}</li>
        </ul>
      </div>
    </div>
  );
}
