# Consignado

Base visual inicial do sistema, criada como Etapa 1.

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

## O que existe nesta etapa

- Layout base com sidebar lateral e header.
- Dashboard inicial com dados mockados.
- Paginas vazias para Clientes, Emprestimos, Pagamentos e Relatorios.
- Componentes reutilizaveis:
  - `AppSidebar`
  - `AppHeader`
  - `MetricCard`
  - `PageTitle`
  - `EmptyState`

## O que nao existe nesta etapa

- Banco de dados.
- Autenticacao.
- Prisma.
- Supabase.
- CRUD.
- Regras financeiras.
- Integracao com WhatsApp.

## Proxima etapa sugerida

Definir modelo de dados e fluxos principais antes de implementar formularios, validacoes,
autenticacao e persistencia.
