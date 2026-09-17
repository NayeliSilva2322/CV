import "./AnimatedTitle.css";

/**
 * Anima un texto letra por letra (fade + slide-up escalonado).
 * Pensado para títulos destacados como el nombre en el Hero.
 */
export default function AnimatedTitle({ text, as: Tag = "span", className = "", startDelay = 0 }) {
  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <Tag className={`animated-title ${className}`.trim()} aria-label={text}>
      {words.map((word, wi) => (
        <span className="animated-title__word" key={`${word}-${wi}`}>
          {word.split("").map((char, ci) => {
            const delay = startDelay + letterIndex * 32;
            letterIndex += 1;
            return (
              <span
                className="animated-title__char"
                style={{ animationDelay: `${delay}ms` }}
                key={`${char}-${ci}`}
                aria-hidden="true"
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
