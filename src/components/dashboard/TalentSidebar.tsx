"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Home, User, Briefcase, Settings, LogOut, Bell } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { logoutUser } from "@/actions/auth";

type TalentSidebarProps = {
  user: { name: string | null; image: string | null };
};

export function TalentSidebar({ user }: TalentSidebarProps) {
  const pathname = usePathname();
  const t = useTranslations("Dashboard");
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const mainNavItems = [
    { label: t("overview"), href: "/dashboard/talent", icon: Home },
    { label: t("profile"), href: "/dashboard/talent/profile", icon: User },
    { label: t("collaborations"), href: "/dashboard/talent/collaborations", icon: Briefcase },
    { label: t("notifications"), href: "/dashboard/talent/notifications", icon: Bell },
  ];

  const bottomNavItems = [
    { label: t("settings"), href: "/dashboard/talent/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    await logoutUser();
    router.push("/");
    router.refresh();
  };

  return (
    <aside className="flex h-screen w-[260px] flex-col border-r border-navy/10 bg-white sticky top-0">
      {/* Logo avec texte */}
      <div className="flex h-20 items-center justify-between px-6 border-b border-navy/5">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo/logo-Kazi.png" 
            alt="Kazi" 
            width={32} 
            height={32} 
            className="h-8 w-auto" 
          />
          <span className="font-heading text-xl font-semibold text-navy">Kazi</span>
        </Link>
        <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
          Talent
        </span>
      </div>

      <div className="px-4 py-4">
        <Link href="/dashboard/talent/profile" className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-navy/5">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-beige">
            {user.image ? (
              <Image src={user.image} alt="Profile" fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-heading text-sm font-semibold text-navy">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm font-semibold text-navy">{user.name}</span>
            <span className="truncate text-xs text-muted">{t("roleTalent")}</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-2 overflow-y-auto">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-navy/5 text-navy" : "text-muted hover:bg-navy/5 hover:text-navy"}`}>
              <Icon size={18} className={active ? "text-navy" : "text-muted"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-navy/10 px-4 py-4 space-y-1">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-navy/5 text-navy" : "text-muted hover:bg-navy/5 hover:text-navy"}`}>
              <Icon size={18} className={active ? "text-navy" : "text-muted"} />
              {item.label}
            </Link>
          );
        })}
        <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
          <LogOut size={18} />
          {t("logout")}
        </button>
      </div>
    </aside>
  );
}