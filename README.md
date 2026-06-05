# Gestor de Emprestimos

Painel operacional para controle de carteira de emprestimos.

## Stack

- Next.js
- TypeScript
- App Router
- Tailwind CSS

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## O que existe

- Layout base com sidebar lateral e header.
- Dashboard com indicadores de carteira.
- Paginas para Clientes, Emprestimos, Pagamentos e Relatorios.
- Textos e dados de exemplo alinhados ao modelo sem parcelamento.
- Componentes reutilizaveis:
  - `AppSidebar`
  - `AppHeader`
  - `MetricCard`
  - `PageTitle`
  - `EmptyState`

## Fora do escopo atual

- Banco de dados.
- Autenticacao.
- Prisma.
- Supabase.
- CRUD.
- Regras financeiras.
- Integracao com WhatsApp.

## Regra de negocio

O fluxo de emprestimo nao tera parcelamento. O sistema considera apenas:

- pagamento dos juros do mes;
- quitacao total com acrescimo de 20% sobre o valor.

## Proxima evolucao sugerida

Definir modelo de dados e fluxos principais antes de implementar formularios, validacoes,
autenticacao e persistencia.
