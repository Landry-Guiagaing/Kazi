import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { talents } from "@/data/talents";

export function generateStaticParams() {
  return talents.map((talent) => ({
    slug: talent.id,
  }));
}

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function TalentProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const talent = talents.find((t) => t.id === slug);

  if (!talent) {
    notFound();
  }

  // On utilise getTranslations au lieu de useTranslations
  const t = await getTranslations("TalentsPage");
  const tData = await getTranslations("talents");

  return (
    <main className="bg-cream py-20 sm:py-28 min-h-screen">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/talents"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
          >
            <ArrowLeft size={16} />
            {t("backToTalents")}
          </Link>

          <div className="mt-8 flex flex-col gap-6 rounded-xl bg-beige p-8 shadow-sm sm:p-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-3xl font-semibold text-cream">
                {talent.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
              </div>
              <div>
                <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
                  {talent.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-navy/70">
                  {tData(`${talent.id}.specialty`)}
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-navy/10 pt-6">
              <h2 className="font-heading text-xl font-semibold text-navy">
                À propos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {tData(`${talent.id}.description`)}
              </p>
            </div>

            <div className="mt-6 border-t border-navy/10 pt-6 flex flex-col sm:flex-row gap-6">
               <div>
                  <h3 className="text-sm font-semibold text-navy/50 uppercase tracking-wider">
                    {t("category")}
                  </h3>
                  <p className="mt-1 text-navy font-medium">{talent.category}</p>
               </div>
            </div>

            <div className="mt-8">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Contacter {talent.name.split(" ")[0]}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}