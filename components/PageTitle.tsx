type PageTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageTitle({ eyebrow, title, description }: PageTitleProps) {
  return (
    <section className="max-w-3xl">
      <p className="text-xs font-bold uppercase text-brand">{eyebrow}</p>
      <h2 className="mt-1 text-3xl font-black tracking-normal text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-muted">{description}</p>
    </section>
  );
}
