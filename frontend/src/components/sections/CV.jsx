import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import "./CV.css";

// El archivo PDF real debe colocarse en /public/cv/.
// Ver /public/cv/README.md para instrucciones.
const CV_PATH = "/cv/CV_Cyndi_Silva_Abanto.pdf";

export default function CV() {
  return (
    <section id="cv" className="section cv">
      <SectionHeading index="06" title="Curriculum Vitae" />

      <div className="cv__card">
        <div>
          <p className="cv__label">Versión completa en PDF</p>
          <p className="cv__desc">
            Descarga mi CV para ver el detalle completo de experiencia,
            educación, certificaciones y proyectos.
          </p>
        </div>
        <div className="cv__actions">
          <Button as="a" href={CV_PATH} variant="primary" download>
            Descargar CV (PDF)
          </Button>
          <Button as="a" href={CV_PATH} variant="outline" target="_blank" rel="noreferrer">
            Ver en el navegador
          </Button>
        </div>
      </div>
    </section>
  );
}
