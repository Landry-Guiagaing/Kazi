import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    { number: "01", title: t("step1Title"), description: t("step1Desc") },
    { number: "02", title: t("step2Title"), description: t("step2Desc") },
    { number: "03", title: t("step3Title"), description: t("step3Desc") },
  ];

  return (
    <section aria-labelledby="how-it-works-heading" className="bg-beige py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 id="how-it-works-heading" className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
        </div>
        <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-4">
              <span aria-hidden="true" className="font-heading text-5xl font-semibold text-navy/60 sm:text-6xl">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold text-navy">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}