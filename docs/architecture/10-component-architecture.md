# Kazi — Component Architecture

```text
src/
├── app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedTalents.tsx
│   │   ├── Categories.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── TalentCard.tsx
│       ├── CategoryCard.tsx
│       ├── BenefitCard.tsx
│       ├── TestimonialCard.tsx
│       └── Accordion.tsx
├── data/
└── types/
```

Une section orchestre une zone. Un composant UI possède une responsabilité réutilisable claire.
