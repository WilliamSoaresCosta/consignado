type MetricCardProps = {
  title: string;
  value: string;
  detail: string;
};

export function MetricCard({ title, value, detail }: MetricCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-panel">
      <span className="text-sm font-semibold text-muted">{title}</span>
      <strong className="mt-2 block text-3xl font-black text-ink">{value}</strong>
      <small className="mt-2 block text-sm text-muted">{detail}</small>
    </article>
  );
}
