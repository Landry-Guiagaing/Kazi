import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-cream py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl"
          >
            Prêt à trouver le bon talent ?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Rejoignez Kazi et découvrez des profils qui correspondent
            réellement à vos besoins.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Trouver un talent
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Je suis un talent — Créer mon profil
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}