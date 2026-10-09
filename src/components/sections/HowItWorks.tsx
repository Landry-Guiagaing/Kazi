import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Créez votre profil",
    description:
      "Présentez vos compétences, vos réalisations et ce qui vous distingue.",
  },
  {
    number: "02",
    title: "Soyez découvert",
    description:
      "Les entreprises explorent les profils par domaine et par compétence.",
  },
  {
    number: "03",
    title: "Saisissez les bonnes opportunités",
    description:
      "Échangez avec des équipes dont le besoin correspond réellement à votre profil.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-beige py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2
            id="how-it-works-heading"
            className="font-heading text-3xl font-semibold text-navy sm:text-4xl"
          >
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-muted">
            {"Trois étapes, du profil à l'opportunité."}
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-4">
              <span
                aria-hidden="true"
                className="font-heading text-5xl font-semibold text-navy/60 sm:text-6xl"
              >
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}