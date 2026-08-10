export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
        {title}
      </h2>
    </div>
  );
}