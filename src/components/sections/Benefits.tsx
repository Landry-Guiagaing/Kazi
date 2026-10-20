import { UserCircle, Eye, Target, Search, Clock, Handshake } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { BenefitCard } from "@/components/ui/BenefitCard";

export function Benefits() {
  const t = useTranslations("Benefits");

  const talentBenefits = [
    { id: "profile", icon: UserCircle, title: t("talent1Title"), description: t("talent1Desc") },
    { id: "visibility", icon: Eye, title: t("talent2Title"), description: t("talent2Desc") },
    { id: "opportunities", icon: Target, title: t("talent3Title"), description: t("talent3Desc") },
  ];

  const companyBenefits = [
    { id: "search", icon: Search, title: t("company1Title"), description: t("company1Desc") },
    { id: "time", icon: Clock, title: t("company2Title"), description: t("company2Desc") },
    { id: "matches", icon: Handshake, title: t("company3Title"), description: t("company3Desc") },
  ];

  return (
    <section aria-labelledby="benefits-heading" className="bg-cream py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2 id="benefits-heading" className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
        </div>
        <div className="flex flex-col gap-16 lg:gap-20">
          <div>
            <h3 className="mb-8 font-heading text-xl font-semibold text-navy sm:mb-10 sm:text-2xl">
              {t("talentTitle")}
            </h3>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {talentBenefits.map((benefit) => (
                <li key={benefit.id}>
                  <BenefitCard icon={benefit.icon} title={benefit.title} description={benefit.description} headingLevel={4} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-8 font-heading text-xl font-semibold text-navy sm:mb-10 sm:text-2xl">
              {t("companyTitle")}
            </h3>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {companyBenefits.map((benefit) => (
                <li key={benefit.id}>
                  <BenefitCard icon={benefit.icon} title={benefit.title} description={benefit.description} headingLevel={4} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}