import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <SectionHeading index="04" title="Proyectos" />

      <div className="projects__grid">
        {projects.map((project, i) => (
          <Reveal as="article" className="project-card" delay={i * 90} key={project.id}>
            <div className={`project-card__visual project-card__visual--${project.visual}`}>
              {project.image ? (
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
                  Ver en GitHub
                </a>
              ) : (
                <span className="project-card__link project-card__link--disabled">
                  Repositorio no público
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
