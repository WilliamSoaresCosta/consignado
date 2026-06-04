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
    detail: "Sem parcelamento no modelo",
  },
  {
    title: "Juros do mes",
    value: "18",
    detail: "Cobrancas demonstrativas",
  },
  {
    title: "Quitacoes",
    value: "5",
    detail: "Total com acrescimo de 20%",
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageTitle
        eyebrow="Dashboard"
        title="Visao geral da operacao"
        description="Dados mockados para validar a base visual do modelo sem parcelamento."
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
            {["Cliente cadastrado", "Juro mensal a receber", "Quitacao total em aberto"].map(
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
          description="As paginas principais ja existem. Na etapa seguinte podemos desenhar formularios sem parcelamento e com opcoes de juro mensal ou quitacao."
        />
      </section>
    </>
  );
}
