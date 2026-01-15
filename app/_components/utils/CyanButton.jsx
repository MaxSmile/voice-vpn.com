export default function CyanButton({
  as: Component = "a",
  className = "",
  children,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center bg-[var(--brand-cyan)] text-white hover:bg-opacity-90 transition-all";

  return (
    <Component className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
