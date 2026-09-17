import Reveal from "./Reveal";
import "./SectionHeading.css";

export default function SectionHeading({ index, title }) {
  return (
    <Reveal as="div" className="section-heading">
      {index && <span className="index">{index}</span>}
      <h2>{title}</h2>
      <span className="rule" />
    </Reveal>
  );
}
