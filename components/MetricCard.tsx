type MetricCardProps = {
  title: string;
  value: string;
  detail: string;
  tone?: "teal" | "slate" | "amber" | "rose";
};

const toneStyles: Record<NonNullable<MetricCardProps["tone"]>, string> = {
  teal: "bg-teal-500",
  slate: "bg-slate-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
};

export function MetricCard({ title, value, detail, tone = "teal" }: MetricCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-panel">
      <div className={`h-1.5 ${toneStyles[tone]}`} />
      <div className="p-5">
        <span className="text-sm font-semibold text-muted">{title}</span>
        <strong className="mt-2 block text-3xl font-black tracking-normal text-ink">
          {value}
        </strong>
        <small className="mt-2 block text-sm leading-5 text-muted">{detail}</small>
      </div>
    </article>
  );
}
