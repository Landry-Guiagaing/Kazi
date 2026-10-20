import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section aria-labelledby="testimonials-heading" className="bg-beige py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 id="testimonials-heading" className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-xs text-muted">{t("disclaimer")}</p>
      </Container>
    </section>
  );
}