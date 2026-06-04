import { EmptyState } from "@/components/EmptyState";
import { MetricCard } from "@/components/MetricCard";
import { PageTitle } from "@/components/PageTitle";

const metrics = [
  {
    title: "Clientes ativos",
    value: "128",
    detail: "Base mockada para etapa visual",
  },
  {
    title: "Emprestimos em andamento",
    value: "42",
    detail: "Sem regras financeiras nesta etapa",
  },
  {
    title: "Pagamentos previstos",
    value: "18",
    detail: "Agenda demonstrativa",
  },
  {
    title: "Pendencias",
    value: "5",
    detail: "Itens para acompanhamento",
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageTitle
        eyebrow="Dashboard"
        title="Visao geral da operacao"
        description="Dados mockados para validar a base visual antes das regras de negocio."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            detail={metric.detail}
          />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-brand">Resumo</p>
              <h2 className="text-lg font-bold text-ink">Movimento recente</h2>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-brand-dark">
              Mock
            </span>
          </div>

          <div className="grid gap-3">
            {["Cliente cadastrado", "Emprestimo aguardando revisao", "Pagamento previsto"].map(
              (item, index) => (
                <div
                  className="flex items-center justify-between rounded-lg border border-line bg-slate-50 px-4 py-3"
                  key={item}
                >
                  <span className="font-semibold text-ink">{item}</span>
                  <span className="text-sm text-muted">Item {index + 1}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <EmptyState
          title="Proxima etapa preparada"
          description="As paginas principais ja existem. Na etapa seguinte podemos definir dados, formularios e validacoes."
        />
      </section>
    </>
  );
}
