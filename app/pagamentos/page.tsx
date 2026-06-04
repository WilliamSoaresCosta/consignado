import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function PagamentosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Pagamentos"
        title="Pagamentos"
        description="Espaco reservado para controle de juros mensais e quitacoes."
      />
      <EmptyState
        title="Pagamentos ficam para a proxima etapa"
        description="A pagina existe apenas para validar navegacao e layout, sem parcelamento implementado."
      />
    </>
  );
}
