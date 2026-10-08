import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Talents", href: "#talents" },
  { label: "Catégories", href: "#categories" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-beige">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3 md:py-20">
          {/* Colonne marque */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label="Kazi — Accueil"
              className="inline-flex w-fit items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              <Image
                src="/images/logo/logo-Kazi.png"
                alt="Kazi"
                width={56}
                height={56}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Kazi connecte les talents africains aux opportunités qui
              correspondent à leurs compétences.
            </p>
          </div>

          {/* Colonne navigation */}
          <nav aria-label="Navigation du pied de page">
            <h2 className="mb-4 font-heading text-base font-semibold text-navy">
              Navigation
            </h2>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne CTA */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-base font-semibold text-navy">
              Vous recrutez ?
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Découvrez des profils qui correspondent réellement à vos besoins.
            </p>
            <Button variant="primary" size="md" className="w-fit">
              Trouver un talent
            </Button>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="border-t border-navy/10 py-6">
          <p className="text-xs text-muted">
            © {year} Kazi. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}