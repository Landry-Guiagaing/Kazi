"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Search, X } from "lucide-react";
import { TalentCard } from "@/components/ui/TalentCard";
import { Select } from "@/components/ui/Select";
import { talents } from "@/data/talents";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/Button";

export function TalentsDirectory() {
  const t = useTranslations("TalentsPage");
  const tCategories = useTranslations("categories");
  const tData = useTranslations("talents");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryOptions = [
    { value: "all", label: t("allCategories") },
    ...categories.map((cat) => ({
      value: cat.name,
      label: tCategories(`${cat.id}.name`),
    })),
  ];

  const filteredTalents = useMemo(() => {
    return talents.filter((talent) => {
      const name = talent.name.toLowerCase();
      const specialty = tData(`${talent.id}.specialty`).toLowerCase();
      const description = tData(`${talent.id}.description`).toLowerCase();
      const query = searchQuery.toLowerCase();

      const matchesSearch =
        name.includes(query) ||
        specialty.includes(query) ||
        description.includes(query);

      const matchesCategory =
        selectedCategory === "all" || talent.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, tData]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

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
          {filteredTalents.map((talent) => (
            <li key={talent.id} className="relative group">
              <TalentCard talent={talent} />
              <Link
                href={`/talents/${talent.id}`}
                className="absolute inset-0 z-10"
                aria-label={`${t("viewProfile")} ${talent.name}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl bg-white py-20 text-center">
          <p className="text-lg text-muted">{t("noResults")}</p>
          <Button
            variant="secondary"
            size="md"
            onClick={clearFilters}
            className="mt-6"
          >
            {t("clearFilters")}
          </Button>
        </div>
      )}
    </div>
  );
}