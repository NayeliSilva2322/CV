import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import "./Contact.css";

export default function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Teléfono", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
    profile.linkedin && { label: "LinkedIn", value: "Ver perfil", href: profile.linkedin },
    profile.github && { label: "GitHub", value: "Ver perfil", href: profile.github },
  ].filter(Boolean);

  return (
    <section id="contacto" className="section contact">
      <SectionHeading index="07" title="Contacto" />

      <div className="contact__wrap">
        <p className="contact__lead">
          ¿Tienes un proyecto de IA, datos o automatización en mente?
          Escríbeme, con gusto conversamos.
        </p>

        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span className="contact__link-label">{link.label}</span>
                <span className="contact__link-value">{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
