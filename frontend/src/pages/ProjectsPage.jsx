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
            <div className={`project-card__visual project-card__visual--${project.visual}`}>
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

              {project.github ? (
                <a
                  className="project-card__link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {projectsUi.githubLabel}
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
    </div>
  );
}
