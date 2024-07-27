import "./index.css";

import { NavLink } from "react-router-dom";
import { colors } from "../../theme";
import { Button } from "..";
import { useContext } from "react";
import { PrivacyContext } from "../../contexts";
import { useTranslation } from "react-i18next";

export default function PrivacyConsent() {
  const { t } = useTranslation(["core/privacy-consent", "common"]);

  const { acceptPrivacyPolicy } = useContext(PrivacyContext);

  return (
    <div
      className="privacy-consent"
      style={{ backgroundColor: colors.primary }}
    >
      <span className="privacy-consent-text">
        <span style={{ color: colors.surface }}>{t("text")}&nbsp;</span>
        <NavLink to="/privacy">{t("link")}</NavLink>
      </span>
      <Button
        onClick={() => acceptPrivacyPolicy()}
        className="privacy-consent-button"
        style={{ backgroundColor: colors.surface }}
      >
        {t("common:yes")}
      </Button>
    </div>
  );
}
