"use client";

import { usePathname, Link } from "@/i18n/routing";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ArrowLeft } from "lucide-react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("/login") || pathname.includes("/register");

  if (isAuthPage) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-cream">
        <Link
          href="/"
          className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
        >
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>
        <main className="w-full">{children}</main>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}