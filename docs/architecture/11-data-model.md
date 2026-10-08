# Kazi — Data Model

V1 : aucune base de données.

```ts
type Talent = {
  id: string
  name: string
  specialty: string
  image: string
  description: string
  category: string
}

type Category = {
  id: string
  name: string
  description: string
  icon: string
}

type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  image?: string
}

type FAQItem = {
  id: string
  question: string
  answer: string
}
```

Les données locales doivent être stables, typées et séparées des composants.
