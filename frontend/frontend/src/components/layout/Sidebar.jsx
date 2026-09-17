import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "../../i18n";
import "./Sidebar.css";

export default function Sidebar() {
  const { t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  const onProjectsPage = location.pathname === "/proyectos";

  useEffect(() => {
    if (onProjectsPage) {
      setActive("proyectos");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    t.nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onProjectsPage, location.pathname, t.nav]);

  const handleNavigate = (id) => {
    setOpen(false);

    if (id === "proyectos") {
      navigate("/proyectos");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (onProjectsPage) {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`sidebar ${open ? "sidebar--open" : ""}`} aria-label={t.a11y.mainNav}>
        <button
          className="sidebar__brand"
          onClick={() => handleNavigate("inicio")}
          aria-label={t.a11y.home}
        >
          <span className="sidebar__dot" />
          <span className="sidebar__brand-text">CSA</span>
        </button>

        <ul className="sidebar__list">
          {t.nav.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`sidebar__link ${active === id ? "sidebar__link--active" : ""}`}
                onClick={() => handleNavigate(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="sidebar__footer">
          <span className="sidebar__status">
            <span className="sidebar__status-dot" /> {t.sidebarStatus}
          </span>
        </div>
      </nav>
    </>
  );
}
