import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../../i18n";
import Button from "../ui/Button";
import "./Hero.css";

export default function Hero() {
  const { t } = useI18n();
  const { profile } = t;
  const navigate = useNavigate();
  const [photoOk, setPhotoOk] = useState(true);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openProjects = (e) => {
    e.preventDefault();
    navigate("/proyectos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__content">
          <p className="eyebrow">{profile.role}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__lead">{t.hero.lead}</p>

          <div className="hero__actions">
            <Button as="a" href="/proyectos" variant="primary" onClick={openProjects}>
              {t.hero.ctaProjects}
            </Button>
            <Button as="a" href="#contacto" variant="outline" onClick={scrollTo("contacto")}>
              {t.hero.ctaContact}
            </Button>
          </div>

          <div className="hero__meta">
            <span>{profile.location}</span>
            <span className="hero__meta-sep">·</span>
            <span>{profile.degree}</span>
          </div>
        </div>

        <div className="hero__photo-wrap" aria-hidden={!photoOk}>
          <div className="hero__photo-glow" />
          {photoOk && (
            <img
              className="hero__photo"
              src="/profile/photo.png"
              alt={profile.name}
              onError={() => setPhotoOk(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
