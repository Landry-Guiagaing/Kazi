"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

const locales = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
];

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale, scroll: false });
    setIsOpen(false);
  };

  const currentLocaleLabel = locales.find((l) => l.code === locale)?.label || locale.toUpperCase();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Changer de langue"
        className="flex h-9 items-center gap-1.5 rounded-md border border-navy/20 bg-transparent px-3 text-sm font-medium text-navy transition-colors hover:border-navy/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        {currentLocaleLabel}
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Langues disponibles"
          className="absolute right-0 top-full z-50 mt-2 w-32 overflow-hidden rounded-md border border-navy/10 bg-cream py-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {locales.map((loc) => (
            <li key={loc.code} role="option" aria-selected={locale === loc.code}>
              <button
                type="button"
                onClick={() => handleLocaleChange(loc.code)}
                className={`flex w-full items-center px-4 py-2 text-left text-sm transition-colors ${
                  locale === loc.code
                    ? "bg-navy/5 font-semibold text-navy"
                    : "text-muted hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {loc.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}