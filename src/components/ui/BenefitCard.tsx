import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  headingLevel?: 3 | 4;
};

export function BenefitCard({
  icon: Icon,
  title,
  description,
  headingLevel = 3,
}: BenefitCardProps) {
  const Heading = `h${headingLevel}` as const;

  return (
    <article className="flex flex-col gap-4">
      <div
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-cream"
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <div className="flex flex-col gap-2">
        <Heading className="font-heading text-lg font-semibold text-navy">
          {title}
        </Heading>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}