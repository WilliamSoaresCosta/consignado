import {
  Bell,
  Calculator,
  ClipboardList,
  FileSearch,
  Filter,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

type ProposalStatus = "approved" | "review" | "pending" | "blocked";

type Proposal = {
  id: string;
  customer: string;
  channel: string;
  amount: number;
  installments: number;
  status: ProposalStatus;
};

type Simulation = {
  amount: number;
  installments: number;
  rate: number;
  margin: number;
};

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const proposals: Proposal[] = [
  {
    id: "P-1024",
    customer: "Maria A. Souza",
    channel: "INSS",
    amount: 9400,
    installments: 60,
    status: "approved",
  },
  {
    id: "P-1023",
    customer: "Joao C. Lima",
    channel: "Servidor publico",
    amount: 5200,
    installments: 36,
    status: "review",
  },
  {
    id: "P-1022",
    customer: "Ana P. Rocha",
    channel: "INSS",
    amount: 12000,
    installments: 72,
    status: "pending",
  },
  {
    id: "P-1021",
    customer: "Carlos M. Reis",
    channel: "Privado",
    amount: 3800,
    installments: 24,
    status: "blocked",
  },
];

const statusCopy: Record<ProposalStatus, string> = {
  approved: "Aprovada",
  review: "Analise",
  pending: "Documento",
  blocked: "Bloqueada",
};

function calculatePayment({ amount, installments, rate }: Simulation) {
  const monthlyRate = rate / 100;

  if (!amount || !installments) {
    return 0;
  }

  if (monthlyRate === 0) {
    return amount / installments;
  }

  return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -installments));
}

export function App() {
  const [simulation, setSimulation] = useState<Simulation>({
    amount: 8000,
    installments: 48,
    rate: 1.78,
    margin: 350,
  });

  const estimatedPayment = useMemo(
    () => calculatePayment(simulation),
    [simulation],
  );

  const isWithinMargin = estimatedPayment <= simulation.margin;

  function updateSimulation(field: keyof Simulation, value: string) {
    setSimulation((current) => ({
      ...current,
      [field]: Number(value),
    }));
  }

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Navegacao principal">
        <div className="brand">
          <span className="brand-mark">C</span>
          <div>
            <strong>Consignado</strong>
            <small>Operacao comercial</small>
          </div>
        </div>

        <nav className="nav-list">
          <a className="active" href="#dashboard">
            <LayoutDashboard size={18} aria-hidden="true" />
            Dashboard
          </a>
          <a href="#simulador">
            <Calculator size={18} aria-hidden="true" />
            Simulador
          </a>
          <a href="#propostas">
            <ClipboardList size={18} aria-hidden="true" />
            Propostas
          </a>
          <a href="#seguranca">
            <ShieldCheck size={18} aria-hidden="true" />
            Seguranca
          </a>
        </nav>

        <button className="sidebar-action" type="button">
          <LogOut size={18} aria-hidden="true" />
          Sair
        </button>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Ambiente em desenvolvimento</p>
            <h1>Gestao de consignado com esteira clara e segura.</h1>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Notificacoes">
              <Bell size={19} aria-hidden="true" />
            </button>
            <button className="primary-button" type="button">
              <Plus size={18} aria-hidden="true" />
              Nova proposta
            </button>
          </div>
        </header>

        <section id="dashboard" className="metrics-grid" aria-label="Indicadores">
          <MetricCard title="Propostas hoje" value="24" detail="+18% vs. ontem" />
          <MetricCard title="Valor aprovado" value="R$ 186 mil" detail="Ticket medio R$ 7.750" />
          <MetricCard title="Conversao" value="63%" detail="Em analise e aprovadas" />
          <MetricCard title="Pendencias" value="7" detail="Documentos ou assinatura" />
        </section>

        <section className="content-grid">
          <article id="simulador" className="panel simulator">
            <PanelHeader
              eyebrow="Simulacao"
              title="Calcule uma proposta"
              action={<span className="status-pill">INSS</span>}
            />

            <form className="form-grid">
              <NumberField
                label="Valor liberado"
                min={500}
                step={100}
                value={simulation.amount}
                onChange={(value) => updateSimulation("amount", value)}
              />
              <NumberField
                label="Parcelas"
                min={6}
                max={96}
                step={6}
                value={simulation.installments}
                onChange={(value) => updateSimulation("installments", value)}
              />
              <NumberField
                label="Taxa mensal (%)"
                min={0.1}
                max={5}
                step={0.01}
                value={simulation.rate}
                onChange={(value) => updateSimulation("rate", value)}
              />
              <NumberField
                label="Margem disponivel"
                min={0}
                step={10}
                value={simulation.margin}
                onChange={(value) => updateSimulation("margin", value)}
              />
            </form>

            <div className={isWithinMargin ? "result-box success" : "result-box warning"}>
              <span>Parcela estimada</span>
              <strong>{currency.format(estimatedPayment)}</strong>
              <small>
                {isWithinMargin
                  ? "Parcela dentro da margem informada."
                  : "Parcela acima da margem. Ajuste prazo, taxa ou valor."}
              </small>
            </div>
          </article>

          <article id="propostas" className="panel">
            <PanelHeader
              eyebrow="Esteira"
              title="Propostas recentes"
              action={
                <button className="ghost-button" type="button">
                  <Filter size={17} aria-hidden="true" />
                  Filtrar
                </button>
              }
            />

            <div className="proposal-list" aria-label="Lista de propostas recentes">
              {proposals.map((proposal) => (
                <div className="proposal-row" key={proposal.id}>
                  <div>
                    <strong>{proposal.customer}</strong>
                    <span>
                      {proposal.id} · {proposal.channel} · {currency.format(proposal.amount)} em{" "}
                      {proposal.installments}x
                    </span>
                  </div>
                  <mark className={proposal.status}>{statusCopy[proposal.status]}</mark>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="seguranca" className="security-grid">
          <article className="panel security-card">
            <LockKeyhole size={22} aria-hidden="true" />
            <div>
              <h2>Sem segredos no frontend</h2>
              <p>
                Chaves sensiveis ficam fora do codigo. O arquivo `.env.example` mostra
                apenas variaveis publicas esperadas para o Supabase.
              </p>
            </div>
          </article>
          <article className="panel security-card">
            <Users size={22} aria-hidden="true" />
            <div>
              <h2>Dados pessoais minimizados</h2>
              <p>
                A interface usa nomes demonstrativos e nao armazena CPF, beneficio ou
                documentos reais nesta etapa.
              </p>
            </div>
          </article>
          <article className="panel security-card">
            <FileSearch size={22} aria-hidden="true" />
            <div>
              <h2>Proxima camada</h2>
              <p>
                Quando ligarmos o banco, vamos aplicar RLS, validacao e trilha de auditoria
                para acesso a propostas.
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

type MetricCardProps = {
  title: string;
  value: string;
  detail: string;
};

function MetricCard({ title, value, detail }: MetricCardProps) {
  return (
    <article className="metric-card">
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

type PanelHeaderProps = {
  eyebrow: string;
  title: string;
  action?: ReactNode;
};

function PanelHeader({ eyebrow, title, action }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}

type NumberFieldProps = {
  label: string;
  min: number;
  max?: number;
  step: number;
  value: number;
  onChange: (value: string) => void;
};

function NumberField({ label, min, max, step, value, onChange }: NumberFieldProps) {
  return (
    <label>
      {label}
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
