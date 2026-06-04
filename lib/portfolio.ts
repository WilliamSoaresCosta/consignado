export type ClientPortfolioItem = {
  name: string;
  status: "Ativo" | "Acompanhar" | "Em aberto" | "Conferir";
  principal: number;
};

export const interestRate = 0.2;

export const clientPortfolio: ClientPortfolioItem[] = [
  { name: "Maria A. Souza", status: "Ativo", principal: 5000 },
  { name: "Joao C. Lima", status: "Acompanhar", principal: 3500 },
  { name: "Ana P. Rocha", status: "Em aberto", principal: 7500 },
  { name: "Carlos M. Reis", status: "Ativo", principal: 2500 },
  { name: "Patricia N. Alves", status: "Conferir", principal: 6000 },
  { name: "Rafael T. Costa", status: "Ativo", principal: 4500 },
  { name: "Luciana F. Mendes", status: "Em aberto", principal: 8000 },
  { name: "Marcos V. Nunes", status: "Acompanhar", principal: 3000 },
  { name: "Beatriz L. Ramos", status: "Ativo", principal: 5500 },
  { name: "Fernando P. Dias", status: "Conferir", principal: 4500 },
];

export const portfolioTotals = clientPortfolio.reduce(
  (totals, client) => {
    const interest = client.principal * interestRate;

    return {
      principal: totals.principal + client.principal,
      interest: totals.interest + interest,
      total: totals.total + client.principal + interest,
      clients: totals.clients + 1,
    };
  },
  {
    principal: 0,
    interest: 0,
    total: 0,
    clients: 0,
  },
);

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
