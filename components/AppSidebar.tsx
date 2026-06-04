import Link from "next/link";

const navItems = [
  { href: "/", label: "Dashboard", marker: "D" },
  { href: "/clientes", label: "Clientes", marker: "C" },
  { href: "/emprestimos", label: "Emprestimos", marker: "E" },
  { href: "/pagamentos", label: "Pagamentos", marker: "P" },
  { href: "/relatorios", label: "Relatorios", marker: "R" },
];

export function AppSidebar() {
  return (
    <aside className="border-r border-white/10 bg-slate-950 px-5 py-6 text-white lg:min-h-screen">
      <div className="mb-8 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-200 font-black text-slate-950">
          C
        </span>
        <div>
          <strong className="block text-base">Consignado</strong>
          <small className="text-sm text-slate-400">Base operacional</small>
        </div>
      </div>

      <nav className="grid gap-2" aria-label="Navegacao principal">
        {navItems.map((item) => (
          <Link
            className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            href={item.href}
            key={item.href}
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-xs">
              {item.marker}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
