import "./index.css";
import { colors } from "../../theme";
import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../language-toggle";

export default function Navbar() {
  const { t } = useTranslation();

  function getNavLinkCssClass(props: NavLinkRenderProps) {
    return ["navbar-link", props.isActive ? "active" : ""].join(" ");
  }

  return (
    <div className="navbar">
      <NavLink
        className="navbar-brand"
        style={{ backgroundColor: colors.primary }}
        to="/"
      >
        {t("navbar.brand")}
      </NavLink>

      <div
        className="navbar-divider"
        style={{ backgroundColor: colors.divider }}
      ></div>

      <NavLink
        className={getNavLinkCssClass}
        style={{ color: colors.primaryLight }}
        to="/"
      >
        {t("navbar.home")}
      </NavLink>
      <NavLink
        className={getNavLinkCssClass}
        style={{ color: colors.primaryLight }}
        to="/facturio"
      >
        {t("navbar.facturio")}
      </NavLink>
      <LanguageToggle
        className="navbar-language-toggle"
        style={{ color: colors.primaryLight }}
      />
    </div>
  );
}
