import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function EmprestimosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Emprestimos"
        title="Emprestimos"
        description="Pagina vazia para receber formularios em etapa posterior, sem fluxo de parcelamento."
      />
      <EmptyState
        title="Emprestimos ainda nao implementados"
        description="Na proxima etapa, o fluxo deve prever apenas pagamento dos juros do mes ou quitacao total com acrescimo de 20%."
      />
    </>
  );
}
