import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import Tag from "../components/ui/Tag";
import Reveal from "../components/ui/Reveal";
import "./ProjectsPage.css";

function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectsPage() {
  const { t } = useI18n();
  const { projects, projectsPage, projectsUi, profile } = t;
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    if (!selectedMedia) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedMedia(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedMedia]);

  const openMedia = (project) => {
    setSelectedMedia({
      project,
      type: project.video ? "video" : project.image ? "image" : "visual",
    });
  };

  return (
    <div className="projects-page section">
      <Link to="/" className="projects-page__back">
        <BackArrow /> {projectsPage.backLabel}
      </Link>

      <p className="eyebrow">{projectsPage.eyebrow}</p>
      <h1 className="projects-page__title">{projectsPage.title}</h1>
      <p className="projects-page__intro">{projectsPage.intro}</p>

      {profile.github && (
        <a className="projects-page__repo-link" href={profile.github} target="_blank" rel="noreferrer">
          {projectsPage.repoLabel} →
        </a>
      )}

      <div className="projects-page__grid">
        {projects.map((project, i) => (
          <Reveal as="article" className="project-card" delay={i * 90} key={project.id}>
            <div
              className={`project-card__visual project-card__visual--${project.visual} ${
                "project-card__visual--clickable"
              }`}
              onClick={() => openMedia(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") openMedia(project);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Enlarge ${project.title}`}
            >
              {project.video ? (
                <video
                  src={project.video}
                  aria-label={project.title}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <span className="project-card__visual-label">{project.visual}</span>
              )}
            </div>

            <div className="project-card__body">
              <div className="project-card__head">
                <h3>{project.title}</h3>
                <span className="project-card__period">{project.period}</span>
              </div>

              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <Tag key={tag} tone="sky">
                    {tag}
                  </Tag>
                ))}
              </div>

              {(project.link || project.github) ? (
                <a
                  className="project-card__link"
                  href={project.link || project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {projectsUi.exploreLabel}
                </a>
              ) : (
                <span className="project-card__link project-card__link--disabled">
                  {projectsUi.githubDisabledLabel}
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {selectedMedia && (
        <div
          className="media-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedMedia.project.title}
          onClick={() => setSelectedMedia(null)}
        >
          <div className="media-lightbox__content" onClick={(event) => event.stopPropagation()}>
            <button
              className="media-lightbox__close"
              type="button"
              onClick={() => setSelectedMedia(null)}
              aria-label={projectsUi.closeMediaLabel}
            >
              ×
            </button>
            <div className="media-lightbox__media">
              {selectedMedia.type === "video" ? (
                <video src={selectedMedia.project.video} controls autoPlay playsInline />
              ) : selectedMedia.type === "image" ? (
                <img src={selectedMedia.project.image} alt={selectedMedia.project.title} />
              ) : (
                <div
                  className={`media-lightbox__fallback project-card__visual--${selectedMedia.project.visual}`}
                >
                  <span>{selectedMedia.project.visual}</span>
                </div>
              )}
            </div>
            <div className="media-lightbox__details">
              <p className="eyebrow">{selectedMedia.project.period}</p>
              <h2>{selectedMedia.project.title}</h2>
              <p>{selectedMedia.project.description}</p>
              <div className="project-card__tags">
                {selectedMedia.project.tags.map((tag) => (
                  <Tag key={tag} tone="sky">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
