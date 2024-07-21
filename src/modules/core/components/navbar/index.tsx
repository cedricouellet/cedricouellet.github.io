import "./index.css";
import { colors } from "../../theme";
import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "..";
import { spaceJoin } from "../../utils";
import { useState } from "react";

export default function Navbar() {
  const { t } = useTranslation();

  const [isExpanded, setIsExpanded] = useState(false);

  function getNavLinkCssClass(props: NavLinkRenderProps) {
    return spaceJoin("navbar-link", props.isActive ? "active" : "");
  }

  return (
    <div className="navbar">
      <div>
        <NavLink
          className="navbar-brand"
          style={{ backgroundColor: colors.primary, color: colors.surface }}
          to="/"
        >
          {t("navbar.brand")}
        </NavLink>
        <span className="navbar-toggler" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded === true ? "x" : "+"}</span>
      </div>
      <div className={spaceJoin("navbar-links", isExpanded ? "" : "collapsed")}>
        <NavLink
          className={getNavLinkCssClass}
          style={{ color: colors.text }}
          to="/"
        >
          {"/" + t("navbar.home")}
        </NavLink>
        <NavLink
          className={getNavLinkCssClass}
          style={{ color: colors.text }}
          to="/facturio"
        >
          {"/" + t("navbar.facturio")}
        </NavLink>
        <LanguageToggle
          className="navbar-language-toggle navbar-link"
          style={{ color: colors.text }}
        />
      </div>
    </div>
  );
}
