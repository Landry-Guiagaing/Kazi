import type { Talent } from "@/types/talent";

type TalentCardProps = {
  talent: Talent;
};

export function TalentCard({ talent }: TalentCardProps) {
  const initials = talent.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex flex-col gap-4 rounded-lg bg-cream p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-beige font-heading text-xl font-semibold text-navy"
      >
        {initials}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-lg font-semibold text-navy">
          {talent.name}
        </h3>
        <p className="text-sm font-medium text-navy/70">
          {talent.specialty}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {talent.description}
      </p>
    </article>
  );
}