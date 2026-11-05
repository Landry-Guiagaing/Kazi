"use client";

import { useState, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Search, X } from "lucide-react";
import { TalentCard } from "@/components/ui/TalentCard";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { searchTalents, ApiTalent } from "@/lib/api";

export function TalentsDirectory() {
  const t = useTranslations("TalentsPage");
  
  const [talents, setTalents] = useState<ApiTalent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function loadTalents() {
      try {
        const data = await searchTalents();
        setTalents(data);
      } catch (error) {
        console.error("Erreur lors du chargement des talents", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadTalents();
  }, []);

  const filteredTalents = useMemo(() => {
    return talents.filter((talent) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        talent.name.toLowerCase().includes(query) ||
        (talent.title && talent.title.toLowerCase().includes(query)) ||
        (talent.location && talent.location.toLowerCase().includes(query));
      
      // Pour l'instant, le filtre catégorie est désactivé car le backend ne gère pas encore les catégories
      const matchesCategory = selectedCategory === "all"; 

      return matchesSearch && matchesCategory;
    });
  }, [talents, searchQuery, selectedCategory]);

  const categoryOptions = [
    { value: "all", label: t("allCategories") },
    { value: "dev", label: "Développement" },
    { value: "design", label: "Design" },
  ];

  if (isLoading) {
    return <div className="text-center py-20 text-muted">Chargement des talents...</div>;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
            <Search size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="h-12 w-full rounded-md border border-navy/20 bg-white pl-10 pr-10 text-navy placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-navy"
              aria-label="Effacer la recherche"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <Select
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
          ariaLabel={t("allCategories")}
          className="sm:w-64"
        />
      </div>

      {filteredTalents.length > 0 ? (
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTalents.map((talent) => {
            // On adapte les données API au type attendu par TalentCard
            const cardTalent = {
              id: talent.id,
              name: talent.name,
              specialty: talent.title || "Titre non défini",
              description: talent.location || "Localisation non renseignée",
              category: "Talent",
              image: talent.image || undefined,
            };

            return (
              <li key={talent.id} className="relative group">
                <TalentCard talent={cardTalent} />
                <Link
                  href={`/talents/${talent.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`${t("viewProfile")} ${talent.name}`}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl bg-beige py-20 text-center">
          <p className="text-lg text-muted">{t("noResults")}</p>
          <Button
            variant="secondary"
            size="md"
            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
            className="mt-6"
          >
            {t("clearFilters")}
          </Button>
        </div>
      )}
    </div>
  );
}