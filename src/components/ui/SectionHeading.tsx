export function SectionHeading({ eyebrow, title, className = "" }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
    </div>
  );
}
