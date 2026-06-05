import { EmptyState } from "@/components/EmptyState";
import { MetricCard } from "@/components/MetricCard";
import { PageTitle } from "@/components/PageTitle";
import { formatCurrency, interestRate, portfolioTotals } from "@/lib/portfolio";

const metrics = [
  {
    title: "Valor emprestado",
    value: formatCurrency(portfolioTotals.principal),
    detail: "Principal em aberto",
    tone: "teal" as const,
  },
  {
    title: "Juros a receber",
    value: formatCurrency(portfolioTotals.interest),
    detail: `${interestRate * 100}% sobre a carteira atual`,
    tone: "slate" as const,
  },
  {
    title: "Total a receber",
    value: formatCurrency(portfolioTotals.total),
    detail: "Principal + juros",
    tone: "amber" as const,
  },
  {
    title: "Clientes ativos",
    value: String(portfolioTotals.clients),
    detail: "Base em acompanhamento",
    tone: "rose" as const,
  },
];

const activityItems = [
  {
    title: "Cliente cadastrado",
    description: "Novo cliente incluido na carteira",
    status: "Novo",
  },
  {
    title: "Juros mensais a receber",
    description: "Recebimento previsto para a carteira ativa",
    status: "Hoje",
  },
  {
    title: "Quitacao total em aberto",
    description: "Cliente com saldo total disponivel para conferencia",
    status: "Revisar",
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageTitle
        eyebrow="Dashboard"
        title="Visao geral da operacao"
        description="Carteira simulada com R$ 50.000 emprestados, juros de 20% e total a receber."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            detail={metric.detail}
            tone={metric.tone}
          />
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-line bg-white shadow-panel">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-normal text-brand">Resumo</p>
              <h2 className="text-lg font-bold text-ink">Movimento recente</h2>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-brand-dark">
              Carteira
            </span>
          </div>

          <div className="grid gap-3 p-5">
            {activityItems.map((item) => (
              <div
                className="grid gap-3 rounded-lg border border-line bg-slate-50 p-4 sm:grid-cols-[1fr_auto] sm:items-center"
                key={item.title}
              >
                <div>
                  <span className="font-bold text-ink">{item.title}</span>
                  <p className="mt-1 text-sm leading-5 text-muted">{item.description}</p>
                </div>
                <span className="w-fit rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <section className="rounded-lg border border-line bg-[#101f24] p-5 text-white shadow-panel">
            <p className="text-xs font-bold uppercase tracking-normal text-teal-200">
              Carteira atual
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight">
              {formatCurrency(portfolioTotals.total)} previstos para recebimento.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A composicao considera {formatCurrency(portfolioTotals.principal)} em
              principal e {formatCurrency(portfolioTotals.interest)} em juros.
            </p>
          </section>

          <EmptyState
            title="Fluxo operacional definido"
            description="A carteira trabalha com duas saidas: pagamento dos juros mensais ou quitacao total do saldo em aberto."
          />
        </div>
      </section>
    </>
  );
}
