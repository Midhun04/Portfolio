type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  headingLevel?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  headingLevel = "h2",
}: SectionHeadingProps) {
  const TitleTag = headingLevel;

  return (
    <header className="section__header">
      <span className="section__subtitle">{eyebrow}</span>
      <TitleTag className="section__title">{title}</TitleTag>
      {description ? (
        <p className="section__lead">{description}</p>
      ) : null}
    </header>
  );
}
