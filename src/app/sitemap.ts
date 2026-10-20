import type { MetadataRoute } from "next";
import { talents } from "@/data/talents";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://kazi-talent.vercel.app";
  const locales = ["fr", "en"];

  const routes: MetadataRoute.Sitemap = [];

  // 1. Ajouter l'accueil pour chaque langue
  locales.forEach((locale) => {
    routes.push({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
  });

  // 2. Ajouter l'annuaire des talents pour chaque langue
  locales.forEach((locale) => {
    routes.push({
      url: `${siteUrl}/${locale}/talents`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 3. Ajouter chaque profil de talent pour chaque langue
  talents.forEach((talent) => {
    locales.forEach((locale) => {
      routes.push({
        url: `${siteUrl}/${locale}/talents/${talent.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return routes;
}