"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";

const navItems = [
  { label: "Talents", href: "#talents" },
  { label: "Catégories", href: "#categories" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-navy/10 bg-cream/95 backdrop-blur-sm">
        <Container>
          <div className="flex h-16 items-center justify-between gap-8">
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
                  className="flex w-auto h-16 items-center justify-between gap-8 "
                />
            </Link>

            <nav
              aria-label="Navigation principale"
              className="hidden lg:block"
            >
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-navy/80 transition-colors duration-200 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                className="hidden sm:inline-flex"
              >
                Trouver un talent
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