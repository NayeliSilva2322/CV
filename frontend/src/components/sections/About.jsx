import { useI18n } from "../../i18n";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "./About.css";

export default function About() {
  const { t } = useI18n();
  const { profile, about, sectionTitles } = t;

  return (
    <section id="sobre-mi" className="section about">
      <SectionHeading index="01" title={sectionTitles.about} />

      <div className="about__grid">
        <Reveal as="div" className="about__text">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}

          <ul className="about__traits">
            {profile.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="aside" className="about__panel" delay={120}>
          <p className="about__panel-title">{about.educationLabel}</p>
          <ul className="about__list">
            {profile.education.map((edu) => (
              <li key={edu.title}>
                <span className="about__list-title">{edu.title}</span>
                <span className="about__list-sub">
                  {edu.school}
                  {edu.place ? ` — ${edu.place}` : ""}
                </span>
                <span className="about__list-period">{edu.period}</span>
              </li>
            ))}
          </ul>

          <p className="about__panel-title">{about.certificationsLabel}</p>
          <ul className="about__list">
            {profile.certifications.map((cert) => (
              <li key={cert.name}>
                <span className="about__list-title">{cert.name}</span>
                <span className="about__list-period">{cert.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
