import "./index.css";
import { colors } from "../../config/theme";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

export default function Navbar() {
  function getNavLinkCssClass(props: NavLinkRenderProps) {
    return ["navbar-link", props.isActive ? "active" : ""].join(" ");
  }

  return (
    <div className="navbar" style={{ backgroundColor: colors.primary }}>
      <NavLink className="navbar-brand" style={{backgroundColor: colors.primary, color: colors.primaryLight}} to="/">
        CAO
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
        Home
      </NavLink>
      <NavLink
        className={getNavLinkCssClass}
        style={{ color: colors.primaryLight }}
        to="/facturio"
      >
        Facturio
      </NavLink>
    </div>
  );
}
