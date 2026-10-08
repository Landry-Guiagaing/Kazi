import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-cream py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1
            id="hero-heading"
            className="font-heading text-4xl leading-tight font-semibold text-navy sm:text-5xl lg:text-6xl"
          >
            Les talents africains, au bon endroit.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Kazi connecte les talents aux opportunités qui correspondent
            réellement à leurs compétences.
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