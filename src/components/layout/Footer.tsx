import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navItems = [
  { labelKey: "talents", href: "#talents" },
  { labelKey: "categories", href: "#categories" },
  { labelKey: "howItWorks", href: "#how-it-works" },
  { labelKey: "faq", href: "#faq" },
];

export function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-beige">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3 md:py-20">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Kazi — Accueil" className="inline-flex w-fit items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
              <Image src="/images/logo/logo-Kazi.png" alt="Kazi" width={56} height={56} className="h-12 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">{t("tagline")}</p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h2 className="mb-4 font-heading text-base font-semibold text-navy">{t("navTitle")}</h2>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors duration-200 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
                    {tHeader(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-base font-semibold text-navy">{t("ctaTitle")}</h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted">{t("ctaSubtitle")}</p>
            <Button variant="primary" size="md" className="w-fit">
              {t("ctaButton")}
            </Button>
          </div>
        </div>
        <div className="border-t border-navy/10 py-6">
          <p className="text-xs text-muted">{t("copyright", { year })}</p>
        </div>
      </Container>
    </footer>
  );
}