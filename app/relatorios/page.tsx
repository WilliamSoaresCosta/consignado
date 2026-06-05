import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function RelatoriosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Relatorios"
        title="Relatorios"
        description="Indicadores da carteira, juros a receber e total previsto."
      />
      <EmptyState
        title="Resumo gerencial"
        description="Os relatorios consolidam valor emprestado, juros, quitacoes e clientes em acompanhamento."
      />
    </>
  );
}
