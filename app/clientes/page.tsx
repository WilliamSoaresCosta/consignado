import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

const clients = [
  {
    name: "Maria A. Souza",
    status: "Ativo",
    principal: "R$ 1.000",
    interest: "R$ 200",
    total: "R$ 1.200",
  },
  {
    name: "Joao C. Lima",
    status: "Acompanhar",
    principal: "R$ 750",
    interest: "R$ 150",
    total: "R$ 900",
  },
  {
    name: "Ana P. Rocha",
    status: "Em aberto",
    principal: "R$ 1.500",
    interest: "R$ 300",
    total: "R$ 1.800",
  },
];

export default function ClientesPage() {
  return (
    <>
      <PageTitle
        eyebrow="Clientes"
        title="Clientes"
        description="Visual inicial para entrada e acompanhamento de todos os clientes."
      />

      <section className="rounded-lg border border-line bg-white shadow-panel">
        <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-normal text-brand">
              Carteira mockada
            </p>
            <h2 className="text-lg font-bold text-ink">Entrada de clientes</h2>
          </div>
          <span className="w-fit rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-muted">
            Somente visual
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
              {clients.map((client) => (
                <tr className="border-b border-line last:border-b-0" key={client.name}>
                  <td className="px-5 py-4 font-semibold text-ink">{client.name}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-brand-dark">
                      {client.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-muted">{client.principal}</td>
                  <td className="px-5 py-4 text-sm text-muted">{client.interest}</td>
                  <td className="px-5 py-4 text-sm font-bold text-ink">{client.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <EmptyState
        title="Formulario vem na proxima etapa"
        description="Depois podemos criar a entrada de todos os clientes com campos, validacao e regras, ainda antes de conectar banco."
      />
    </>
  );
}
