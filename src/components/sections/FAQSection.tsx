import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
// on n'importe plus faqItems directement

export function FAQSection() {
  const t = useTranslations("FAQ");
  const tData = useTranslations("faq");

  // On crée les items traduits en utilisant les IDs
  const ids = ["what-is-kazi", "who-is-it-for", "create-profile", "pricing", "availability"];
  const translatedItems = ids.map((id) => ({
    id,
    question: tData(`${id}.question`),
    answer: tData(`${id}.answer`),
  }));

  return (
    <section aria-labelledby="faq-heading" className="bg-cream py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 id="faq-heading" className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion items={translatedItems} />
        </div>
      </Container>
    </section>
  );
}