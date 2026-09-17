import { NavLink } from "react-router-dom";
import { useI18n } from "../../i18n";
import "./ProjectsNav.css";

export default function ProjectsNav() {
  const { t } = useI18n();

  return (
    <NavLink
      to="/proyectos"
      className={({ isActive }) =>
        `projects-nav ${isActive ? "projects-nav--active" : ""}`
      }
      aria-label={t.projectsPage.title}
      title={t.projectsPage.title}
    >
      {t.projectsPage.title}
    </NavLink>
  );
}
