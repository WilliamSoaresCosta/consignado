import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function ClientesPage() {
  return (
    <>
      <PageTitle
        eyebrow="Clientes"
        title="Clientes"
        description="Pagina reservada para listagem e cadastro em etapa futura."
      />
      <EmptyState
        title="Nenhum recurso implementado ainda"
        description="Esta etapa entrega apenas a base visual e a estrutura da pagina."
      />
    </>
  );
}
