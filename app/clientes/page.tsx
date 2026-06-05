import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";
import {
  clientPortfolio,
  formatCurrency,
  interestRate,
  portfolioTotals,
} from "@/lib/portfolio";

export default function ClientesPage() {
  return (
    <>
      <PageTitle
        eyebrow="Clientes"
        title="Clientes"
        description="Carteira com R$ 50.000 emprestados em diversos clientes."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
          <span className="text-sm font-semibold text-muted">Emprestado</span>
          <strong className="mt-2 block text-2xl font-black text-ink">
            {formatCurrency(portfolioTotals.principal)}
          </strong>
        </div>
        <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
          <span className="text-sm font-semibold text-muted">Juros</span>
          <strong className="mt-2 block text-2xl font-black text-ink">
            {formatCurrency(portfolioTotals.interest)}
          </strong>
        </div>
        <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
          <span className="text-sm font-semibold text-muted">Total a receber</span>
          <strong className="mt-2 block text-2xl font-black text-ink">
            {formatCurrency(portfolioTotals.total)}
          </strong>
        </div>
      </section>

      <section className="rounded-lg border border-line bg-white shadow-panel">
        <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-normal text-brand">
              Carteira de clientes
            </p>
            <h2 className="text-lg font-bold text-ink">
              Entrada de clientes com {interestRate * 100}% de juros
            </h2>
          </div>
          <span className="w-fit rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-muted">
            Carteira ativa
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line bg-slate-50 text-sm text-muted">
                <th className="px-5 py-3 font-bold">Cliente</th>
                <th className="px-5 py-3 font-bold">Status</th>
                <th className="px-5 py-3 font-bold">Valor</th>
                <th className="px-5 py-3 font-bold">Juros</th>
                <th className="px-5 py-3 font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              {clientPortfolio.map((client) => {
                const interest = client.principal * interestRate;
                const total = client.principal + interest;

                return (
                <tr className="border-b border-line last:border-b-0" key={client.name}>
                  <td className="px-5 py-4 font-semibold text-ink">{client.name}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-brand-dark">
                      {client.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-muted">
                    {formatCurrency(client.principal)}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted">
                    {formatCurrency(interest)}
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-ink">
                    {formatCurrency(total)}
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <EmptyState
        title="Cadastro de clientes"
        description="A entrada de novos clientes sera organizada com campos de identificacao, valor emprestado, juros, status e comprovantes."
      />
    </>
  );
}
