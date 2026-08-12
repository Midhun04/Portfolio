type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <header className="section__header">
      <span className="section__subtitle">{eyebrow}</span>
      <h2 className="section__title">{title}</h2>
    </header>
  );
}
