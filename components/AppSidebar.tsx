import Link from "next/link";

const navItems = [
  { href: "/", label: "Dashboard", marker: "01" },
  { href: "/clientes", label: "Clientes", marker: "02" },
  { href: "/emprestimos", label: "Emprestimos", marker: "03" },
  { href: "/pagamentos", label: "Pagamentos", marker: "04" },
  { href: "/relatorios", label: "Relatorios", marker: "05" },
];

export function AppSidebar() {
  return (
    <aside className="bg-[#101f24] px-5 py-6 text-white shadow-[18px_0_50px_rgba(15,23,42,0.12)] lg:min-h-screen">
      <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-200 font-black text-slate-950 shadow-sm">
            C
          </span>
          <div>
            <strong className="block text-base">Gestor de Emprestimos</strong>
            <small className="text-sm text-slate-400">Controle de carteira</small>
          </div>
        </div>
        <div className="mt-5 rounded-lg bg-slate-950/45 p-3">
          <p className="text-[11px] font-bold uppercase tracking-normal text-teal-200">
            Operacao
          </p>
          <p className="mt-1 text-sm text-slate-300">Juros mensais e quitacao total</p>
        </div>
      </div>

      <nav className="grid gap-1.5" aria-label="Navegacao principal">
        {navItems.map((item) => (
          <Link
            className="group flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            href={item.href}
            key={item.href}
          >
            <span className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[11px] text-slate-400 transition group-hover:border-teal-200/40 group-hover:text-teal-100">
              {item.marker}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <p className="text-xs font-bold uppercase tracking-normal text-slate-400">
          Regra da carteira
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Sem parcelamento: juros mensais ou quitacao total.
        </p>
      </div>
    </aside>
  );
}
