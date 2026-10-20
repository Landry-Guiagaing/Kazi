"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: t("talents"), href: "/talents" },
    { label: t("categories"), href: "/#categories" },
    { label: t("howItWorks"), href: "/#how-it-works" },
    { label: t("faq"), href: "/#faq" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-navy/10 bg-cream/95 backdrop-blur-sm">
        <Container>
          <div className="flex h-16 items-center justify-between gap-8 sm:h-20">
            <Link
              href="/"
              aria-label="Kazi — Accueil"
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              <Image
                src="/images/logo/logo-Kazi.png"
                alt="Kazi"
                width={56}
                height={56}
                priority
                className="h-10 w-auto sm:h-14 md:h-16"
              />
            </Link>

            <nav aria-label="Navigation principale" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-navy/80 transition-colors duration-200 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <LocaleSwitcher />
              
              <Button variant="primary" size="md" className="hidden sm:inline-flex">
                {t("findTalent")}
              </Button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Ouvrir le menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy transition-colors duration-200 hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy lg:hidden"
              >
                <Menu size={24} aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}