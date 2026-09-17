import { useI18n } from "../../i18n";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "./Experience.css";

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experiencia" className="section experience">
      <SectionHeading index="02" title={t.sectionTitles.experience} />

      <ol className="timeline">
        {t.experience.map((job, i) => (
          <Reveal
            as="li"
            className="timeline__item"
            delay={i * 100}
            key={`${job.company}-${job.role}`}
          >
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3>{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__company">
                {job.company}
                {job.place ? ` — ${job.place}` : ""}
              </p>
              <ul className="timeline__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 30)}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
