import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function EmprestimosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Emprestimos"
        title="Emprestimos"
        description="Controle da carteira sem parcelamento, com juros mensais ou quitacao total."
      />
      <EmptyState
        title="Fluxo de emprestimos"
        description="Cada emprestimo acompanha valor principal, juros de 20%, status do cliente e total para quitacao."
      />
    </>
  );
}
