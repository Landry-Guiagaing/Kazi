import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-cream py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2
            id="faq-heading"
            className="font-heading text-3xl font-semibold text-navy sm:text-4xl"
          >
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Les réponses aux questions les plus courantes.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}