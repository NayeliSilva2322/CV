import { useI18n } from "../../i18n";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "./Research.css";

export default function Research() {
  const { t } = useI18n();

  return (
    <section id="investigacion" className="section research">
      <SectionHeading index="04" title={t.sectionTitles.research} />

      <ul className="research__list">
        {t.research.map((item, i) => (
          <Reveal as="li" className="research__item" delay={i * 60} key={item.title}>
            <span className="research__type">{item.type}</span>
            <div className="research__body">
              <p className="research__title">{item.title}</p>
              <p className="research__venue">
                {item.venue}
                {item.place ? ` · ${item.place}` : ""}
              </p>
            </div>
            <span className="research__date">{item.date}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
