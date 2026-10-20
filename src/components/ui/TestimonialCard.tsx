"use client";

import { useTranslations } from "next-intl";
import type { Testimonial } from "@/types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const t = useTranslations("testimonials");

  return (
    <figure className="flex h-full flex-col gap-6 rounded-lg bg-cream p-8 shadow-sm">
      <blockquote className="font-heading text-lg leading-relaxed text-navy sm:text-xl">
        « {t(`${testimonial.id}.quote`)} »
      </blockquote>
      <figcaption className="mt-auto flex flex-col gap-1">
        <span className="text-sm font-medium text-navy">{testimonial.name}</span>
        <span className="text-sm text-muted">{t(`${testimonial.id}.role`)}</span>
      </figcaption>
    </figure>
  );
}