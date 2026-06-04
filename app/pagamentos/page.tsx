import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function PagamentosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Pagamentos"
        title="Pagamentos"
        description="Espaco reservado para agenda e controle de pagamentos."
      />
      <EmptyState
        title="Pagamentos ficam para a proxima etapa"
        description="A pagina existe apenas para validar navegacao e layout."
      />
    </>
  );
}
