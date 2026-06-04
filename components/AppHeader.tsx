export function AppHeader() {
  return (
    <header className="border-b border-line bg-white/85 px-5 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-normal text-brand">Etapa 1</p>
          <h1 className="text-xl font-black text-ink">Base visual do sistema</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg border border-line bg-slate-50 px-3 py-2 text-sm font-semibold text-muted">
            Ambiente local
          </span>
          <span className="rounded-lg bg-[#101f24] px-3 py-2 text-sm font-semibold text-white">
            Visual only
          </span>
        </div>
      </div>
    </header>
  );
}
