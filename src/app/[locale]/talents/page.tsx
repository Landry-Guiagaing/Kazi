import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { TalentsDirectory } from "@/components/sections/TalentsDirectory";

export default function TalentsDirectoryPage() {
  const t = useTranslations("TalentsPage");

  return (
    <main className="bg-white py-20 sm:py-28 min-h-screen">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-semibold text-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
        </div>

        <TalentsDirectory />
      </Container>
    </main>
  );
}