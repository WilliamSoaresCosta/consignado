# Consignado

Painel operacional para simulacao e acompanhamento de propostas de consignado.

## Stack

- Vite
- React
- TypeScript
- CSS modular por estrutura de tela

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Seguranca desde o inicio

- Nao versionar `.env` ou chaves privadas.
- Usar apenas variaveis publicas `VITE_*` no frontend.
- Nunca armazenar CPF, documentos ou dados bancarios em estado local sem necessidade.
- Validar entradas antes de enviar dados para APIs.
- Preparar Supabase com RLS antes de persistir clientes e propostas.
- Tratar autenticacao e autorizacao como camadas separadas.

## Proxima etapa sugerida

Adicionar Supabase Auth com rotas protegidas e politicas RLS para propostas.
