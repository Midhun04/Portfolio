type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[var(--tiny-font-size)] text-board">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-board/70">
                  /
                </span>
              ) : null}
              {last || !item.href ? (
                <span className="font-bold text-title" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
