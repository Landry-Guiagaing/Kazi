import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { TalentCard } from "@/components/ui/TalentCard";
import { talents } from "@/data/talents";

export default function TalentsDirectoryPage() {
  const t = useTranslations("TalentsPage");

  return (
    <main className="bg-cream py-20 sm:py-28 min-h-screen">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-semibold text-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {talents.map((talent) => (
            <li key={talent.id} className="relative group">
              <TalentCard talent={talent} />
              <Link
                href={`/talents/${talent.id}`}
                className="absolute inset-0 z-10"
                aria-label={`${t("viewProfile")} ${talent.name}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}