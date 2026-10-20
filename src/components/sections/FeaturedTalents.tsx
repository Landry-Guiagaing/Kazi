import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { TalentCard } from "@/components/ui/TalentCard";
import { talents } from "@/data/talents";

export function FeaturedTalents() {
  const t = useTranslations("FeaturedTalents");

  return (
    <section aria-labelledby="featured-talents-heading" className="bg-beige py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 id="featured-talents-heading" className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {talents.map((talent) => (
            <li key={talent.id}>
              <TalentCard talent={talent} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}