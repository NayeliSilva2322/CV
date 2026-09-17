import { useI18n } from "../../i18n";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import "./ContactCV.css";

export default function ContactCV() {
  const { t } = useI18n();
  const { profile, contactCv, sectionTitles } = t;

  const links = [
    { label: contactCv.linkLabels.email, value: profile.email, href: `mailto:${profile.email}` },
    {
      label: contactCv.linkLabels.phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
    profile.linkedin && {
      label: contactCv.linkLabels.linkedin,
      value: contactCv.viewProfileLabel,
      href: profile.linkedin,
    },
    profile.github && {
      label: contactCv.linkLabels.github,
      value: contactCv.viewProfileLabel,
      href: profile.github,
    },
  ].filter(Boolean);

  return (
    <section id="contacto" className="section contact-cv">
      <SectionHeading index="05" title={sectionTitles.contact} />

      <Reveal as="div" className="window">
        <div className="window__bar">
          <span className="window__dot window__dot--sky" />
          <span className="window__dot window__dot--orange" />
          <span className="window__dot window__dot--muted" />
          <span className="window__path">{contactCv.windowPath}</span>
        </div>

        <div className="window__panes">
          <div className="window__pane">
            <p className="window__pane-label">{contactCv.contactLabel}</p>
            <p className="window__pane-lead">{contactCv.contactLead}</p>

            <ul className="contact-links">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <span className="contact-links__label">{link.label}</span>
                    <span className="contact-links__value">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="window__divider" aria-hidden="true" />

          <div className="window__pane">
            <p className="window__pane-label">{contactCv.cvLabel}</p>
            <p className="window__pane-lead">{contactCv.cvLead}</p>

            <div className="cv-actions">
              <Button as="a" href={contactCv.cvPath} variant="primary" download>
                {contactCv.downloadLabel}
              </Button>
              <Button as="a" href={contactCv.cvPath} variant="outline" target="_blank" rel="noreferrer">
                {contactCv.viewInBrowserLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
