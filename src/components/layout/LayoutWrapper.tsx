"use client";

import { usePathname, Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ArrowLeft } from "lucide-react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

type LayoutWrapperProps = {
  children: React.ReactNode;
  session: Session | null;
  user: { id: string; name: string | null; image: string | null } | null;
};

export function LayoutWrapper({ children, session, user }: LayoutWrapperProps) {
  const pathname = usePathname();
  const t = useTranslations("LayoutWrapper");

  // On vérifie si on est sur une page d'auth ou de dashboard
  const isAuthPage = pathname.includes("/login") || pathname.includes("/register");
  const isDashboardPage = pathname.includes("/dashboard");

  if (isAuthPage) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-cream">
        <Link
          href="/"
          className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
        >
          <ArrowLeft size={16} />
          {t("backToHome")}
        </Link>
        <main className="w-full">{children}</main>
      </div>
    );
  }

  // Si c'est le dashboard, on n'affiche que le contenu (qui contient déjà sa propre Sidebar)
  if (isDashboardPage) {
    return (
      <SessionProvider session={session}>
        <main className="w-full">{children}</main>
      </SessionProvider>
    );
  }

  // Sinon, on affiche le site public classique (Header + Footer)
  return (
    <SessionProvider session={session}>
      <Header user={user} />
      <main className="flex-1">{children}</main>
      <Footer />
    </SessionProvider>
  );
}