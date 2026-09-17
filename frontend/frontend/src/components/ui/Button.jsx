import "./Button.css";

export default function Button({
  as = "button",
  href,
  variant = "primary",
  children,
  ...rest
}) {
  const Component = as;
  const className = `btn btn--${variant}`;

  if (as === "a") {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}
