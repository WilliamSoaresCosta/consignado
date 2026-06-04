import { EmptyState } from "@/components/EmptyState";
import { PageTitle } from "@/components/PageTitle";

export default function RelatoriosPage() {
  return (
    <>
      <PageTitle
        eyebrow="Relatorios"
        title="Relatorios"
        description="Area futura para indicadores, exportacoes e visoes gerenciais."
      />
      <EmptyState
        title="Relatorios ainda vazios"
        description="Sem graficos ou consultas reais nesta etapa inicial."
      />
    </>
  );
}
