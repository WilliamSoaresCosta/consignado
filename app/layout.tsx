import type { Metadata } from "next";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestor de Emprestimos",
  description: "Painel operacional para controle de emprestimos.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen bg-[#eef3f6] text-ink lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
          <AppSidebar />
          <div className="min-w-0">
            <AppHeader />
            <main className="mx-auto grid w-full max-w-7xl gap-7 px-5 py-7 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
