import { Code, Palette, Camera, Video, type LucideIcon } from "lucide-react";
import type { Category, CategoryIcon } from "@/types/category";

const iconMap: Record<CategoryIcon, LucideIcon> = {
  code: Code,
  palette: Palette,
  camera: Camera,
  video: Video,
};

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <article className="flex h-full flex-col gap-4 rounded-lg bg-beige p-6 transition-shadow duration-200 hover:shadow-sm">
      <div
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-cream"
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-lg font-semibold text-navy">
          {category.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          {category.description}
        </p>
      </div>
    </article>
  );
}