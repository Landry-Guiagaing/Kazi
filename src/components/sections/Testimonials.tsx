import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-beige py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl font-semibold text-navy sm:text-4xl"
          >
            Ils construisent Kazi
          </h2>
          <p className="mt-4 text-lg text-muted">
            Des retours de celles et ceux qui utilisent la plateforme.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-xs text-muted">
          Témoignages de démonstration. Ils illustrent la plateforme et ne
          représentent pas des personnes réelles.
        </p>
      </Container>
    </section>
  );
}