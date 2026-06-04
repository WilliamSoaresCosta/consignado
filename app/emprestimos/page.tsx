import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function EmprestimosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Emprestimos"
        title="Emprestimos"
        description="Pagina vazia para receber regras e formularios em etapa posterior."
      />
      <EmptyState
        title="Emprestimos ainda nao implementados"
        description="Sem CRUD, banco ou regras financeiras nesta primeira etapa."
      />
    </>
  );
}
