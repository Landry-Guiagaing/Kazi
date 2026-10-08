import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="bg-cream py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2
            id="categories-heading"
            className="font-heading text-3xl font-semibold text-navy sm:text-4xl"
          >
            Explorez par domaine
          </h2>
          <p className="mt-4 text-lg text-muted">
            Les compétences qui font avancer les projets.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}