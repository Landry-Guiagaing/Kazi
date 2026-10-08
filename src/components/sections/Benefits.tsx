import {
  UserCircle,
  Eye,
  Target,
  Search,
  Clock,
  Handshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BenefitCard } from "@/components/ui/BenefitCard";

const talentBenefits = [
  {
    id: "profile",
    icon: UserCircle,
    title: "Un profil qui vous ressemble",
    description:
      "Présentez vos compétences et vos réalisations de façon claire et structurée.",
  },
  {
    id: "visibility",
    icon: Eye,
    title: "Gagnez en visibilité",
    description:
      "Soyez découvert par des entreprises qui cherchent votre domaine.",
  },
  {
    id: "opportunities",
    icon: Target,
    title: "Des opportunités pertinentes",
    description:
      "Échangez avec des équipes dont le besoin correspond réellement à votre profil.",
  },
];

const companyBenefits = [
  {
    id: "search",
    icon: Search,
    title: "Trouvez par compétence",
    description: "Explorez les profils par domaine et par savoir-faire.",
  },
  {
    id: "time",
    icon: Clock,
    title: "Gagnez du temps",
    description:
      "Accédez directement aux talents qui correspondent à votre besoin.",
  },
  {
    id: "matches",
    icon: Handshake,
    title: "Des correspondances réelles",
    description:
      "Identifiez des profils qui répondent concrètement à ce que vous cherchez.",
  },
];

export function Benefits() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="bg-cream py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <h2
            id="benefits-heading"
            className="font-heading text-3xl font-semibold text-navy sm:text-4xl"
          >
            Ce que Kazi change
          </h2>
          <p className="mt-4 text-lg text-muted">
            Une plateforme pensée pour les deux côtés.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20">
          <div>
            <h3 className="mb-8 font-heading text-xl font-semibold text-navy sm:mb-10 sm:text-2xl">
              Pour les talents
            </h3>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {talentBenefits.map((benefit) => (
                <li key={benefit.id}>
                  <BenefitCard
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    headingLevel={4}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 font-heading text-xl font-semibold text-navy sm:mb-10 sm:text-2xl">
              Pour les entreprises
            </h3>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {companyBenefits.map((benefit) => (
                <li key={benefit.id}>
                  <BenefitCard
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    headingLevel={4}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}