import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "dev",
    name: "Développement",
    description: "Sites, applications et outils numériques.",
    icon: "code",
  },
  {
    id: "design",
    name: "Design",
    description: "Interfaces, identités visuelles et produits.",
    icon: "palette",
  },
  {
    id: "image",
    name: "Image",
    description: "Photographie et direction artistique.",
    icon: "camera",
  },
  {
    id: "video",
    name: "Vidéo",
    description: "Films courts, contenus de marque et motion.",
    icon: "video",
  },
];