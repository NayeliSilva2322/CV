import { useI18n } from "../../i18n";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";
import "./Skills.css";

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="section skills">
      <SectionHeading index="03" title={t.sectionTitles.skills} />

      <div className="skills__grid">
        {t.skillGroups.map((group, i) => (
          <Reveal
            as="div"
            className={`skills__group skills__group--${group.tone}`}
            delay={i * 70}
            key={group.category}
          >
            <p className="skills__category">
              <span className="skills__dot" /> {group.category}
            </p>
            <div className="skills__tags">
              {group.items.map((item) => (
                <Tag key={item} tone={group.tone}>
                  {item}
                </Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
