import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

/**
 * Envuelve cualquier contenido y lo anima al entrar en el viewport
 * (fade + desplazamiento sutil). Pensado para títulos, tarjetas y listas.
 *
 * - `delay`: retraso en ms, útil para animaciones escalonadas en listas.
 * - `as`: elemento HTML a renderizar (div, li, article, etc.).
 */
export default function Reveal({ children, as = "div", delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = as;

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
