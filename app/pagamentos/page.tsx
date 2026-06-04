import { PageTitle } from "@/components/PageTitle";

const paymentRecords = [
  {
    client: "Maria A. Souza",
    type: "Juros mensais",
    amount: "R$ 200",
    status: "Comprovante pendente",
  },
  {
    client: "Joao C. Lima",
    type: "Quitacao total",
    amount: "R$ 900",
    status: "Aguardando conferencia",
  },
  {
    client: "Ana P. Rocha",
    type: "Juros mensais",
    amount: "R$ 300",
    status: "Recebido",
  },
];

export default function PagamentosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Pagamentos"
        title="Pagamentos"
        description="Controle inicial para registrar juros mensais, quitacoes e comprovantes."
      />

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-line bg-white shadow-panel">
          <div className="border-b border-line px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-normal text-brand">
              Novo registro
            </p>
            <h2 className="text-lg font-bold text-ink">Comprovante de pagamento</h2>
          </div>

          <div className="grid gap-4 p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                className="rounded-lg border border-brand bg-teal-50 px-4 py-3 text-left"
                type="button"
              >
                <span className="block text-sm font-bold text-brand-dark">
                  Juros mensais
                </span>
                <small className="mt-1 block text-sm leading-5 text-muted">
                  Registro de pagamento apenas dos juros do mes.
                </small>
              </button>
              <button
                className="rounded-lg border border-line bg-slate-50 px-4 py-3 text-left"
                type="button"
              >
                <span className="block text-sm font-bold text-ink">Quitacao total</span>
                <small className="mt-1 block text-sm leading-5 text-muted">
                  Registro de pagamento do total em aberto.
                </small>
              </button>
            </div>

            <div className="rounded-lg border border-dashed border-line bg-slate-50 p-6 text-center">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-lg border border-line bg-white text-lg font-black text-brand">
                +
              </div>
              <h3 className="font-bold text-ink">Anexar comprovante</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
                Espaco reservado para PDF, JPG ou PNG. O envio real sera conectado em
                etapa futura.
              </p>
            </div>

            <div className="rounded-lg bg-[#101f24] p-4 text-sm leading-6 text-slate-300">
              Comprovantes devem ser armazenados em area privada, com limite de tamanho,
              validacao de tipo de arquivo e historico de conferencia.
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-white shadow-panel">
          <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-normal text-brand">
                Conferencia
              </p>
              <h2 className="text-lg font-bold text-ink">Pagamentos recentes</h2>
            </div>
            <span className="w-fit rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-muted">
              Em preparacao
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-slate-50 text-sm text-muted">
                  <th className="px-5 py-3 font-bold">Cliente</th>
                  <th className="px-5 py-3 font-bold">Tipo</th>
                  <th className="px-5 py-3 font-bold">Valor</th>
                  <th className="px-5 py-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentRecords.map((payment) => (
                  <tr className="border-b border-line last:border-b-0" key={payment.client}>
                    <td className="px-5 py-4 font-semibold text-ink">{payment.client}</td>
                    <td className="px-5 py-4 text-sm text-muted">{payment.type}</td>
                    <td className="px-5 py-4 text-sm font-bold text-ink">
                      {payment.amount}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-brand-dark">
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
