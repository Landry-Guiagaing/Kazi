"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Home, User, Briefcase, Settings, LogOut, Bell } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { logoutUser } from "@/actions/auth";

type CompanySidebarProps = {
  user: { name: string | null; image: string | null };
  companyName?: string | null;
};

export function CompanySidebar({ user, companyName }: CompanySidebarProps) {
  const pathname = usePathname();
  const t = useTranslations("Dashboard");
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { label: t("profile"), href: "/dashboard/company/profile", icon: User },
    { label: t("overview"), href: "/dashboard/company", icon: Home },
    { label: t("talents"), href: "/talents", icon: Briefcase }, // Lien vers l'annuaire
    { label: t("notifications"), href: "/dashboard/company/notifications", icon: Bell },
    { label: t("settings"), href: "/dashboard/company/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    await logoutUser();
    router.push("/");
    router.refresh();
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-navy/10 bg-white sticky top-0">
      <div className="flex h-24 items-center px-8 border-b border-navy/10">
        <Link href="/">
          <Image src="/images/logo/logo-Kazi.png" alt="Kazi" width={140} height={56} className="h-14 w-auto" />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-3 p-8 border-b border-navy/10">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-navy/10 bg-beige shadow-sm">
          {user.image ? (
            <Image src={user.image} alt="Profile" fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-heading text-2xl font-semibold text-navy">
              {companyName?.charAt(0).toUpperCase() || user.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="text-center mt-2">
          <p className="font-heading text-lg font-semibold text-navy truncate w-56">
            {companyName || user.name}
          </p>
          <p className="text-xs text-muted uppercase tracking-wider mt-1 font-medium">
            {t("roleCompany")}
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-6 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                active ? "bg-cream text-navy shadow-sm border border-navy/5" : "text-muted hover:bg-navy/5 hover:text-navy"
              }`}
            >
              <Icon size={20} className={active ? "text-navy" : "text-muted"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-navy/10">
        <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
          <LogOut size={20} />
          {t("logout")}
        </button>
      </div>
    </aside>
  );
}