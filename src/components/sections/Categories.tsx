import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

export function Categories() {
  const t = useTranslations("Categories");

  return (
    <section aria-labelledby="categories-heading" className="bg-cream py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 id="categories-heading" className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
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