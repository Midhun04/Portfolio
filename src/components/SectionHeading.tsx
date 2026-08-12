type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  watermark: string;
};

export function SectionHeading({
  eyebrow,
  title,
  watermark,
}: SectionHeadingProps) {
  return (
    <>
      <header className="section__header">
        <span className="section__subtitle">{eyebrow}</span>
        <h2 className="section__title">{title}</h2>
      </header>
      <span className="section__watermark" aria-hidden>
        {watermark}
      </span>
    </>
  );
}
