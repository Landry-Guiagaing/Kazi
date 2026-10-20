"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Select } from "./Select";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  const options = [
    { value: "fr", label: "FR" },
    { value: "en", label: "EN" },
  ];

  return (
    <Select
      options={options}
      value={locale}
      onChange={handleLocaleChange}
      ariaLabel="Changer de langue"
      className="w-24"
    />
  );
}