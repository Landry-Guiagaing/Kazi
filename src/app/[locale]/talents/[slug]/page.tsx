import { getTalentById } from "@/lib/api";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Link as LinkIcon, MapPin } from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function TalentProfilePage({ params }: PageProps) {
  const { slug } = await params;
  
  let talent;
  try {
    talent = await getTalentById(slug);
  } catch {
    notFound();
  }

  return (
    <main className="bg-cream py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <Link href="/talents" className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-navy">
          <ArrowLeft size={16} />
          Retour à l&apos;annuaire
        </Link>

        <div className="mt-8 flex flex-col gap-6 rounded-xl bg-white p-8 shadow-sm sm:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-3xl font-semibold text-cream">
              {talent.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
                {talent.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-navy/70">
                {talent.title || "Titre non défini"}
              </p>
              {talent.location && (
                <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                  <MapPin size={14} /> {talent.location}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-navy/10 pt-6">
            <h2 className="font-heading text-xl font-semibold text-navy">À propos</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {talent.bio || "Aucune biographie renseignée."}
            </p>
          </div>

          {talent.skills && talent.skills.length > 0 && (
            <div className="border-t border-navy/10 pt-6">
              <h2 className="font-heading text-xl font-semibold text-navy mb-3">Compétences</h2>
              <div className="flex flex-wrap gap-2">
                {talent.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-navy/5 px-3 py-1 text-sm font-medium text-navy">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(talent.website || talent.linkedin || talent.github) && (
            <div className="border-t border-navy/10 pt-6">
              <h2 className="font-heading text-xl font-semibold text-navy mb-3">Liens</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                {talent.website && (
                  <a href={talent.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-navy/70 hover:text-navy hover:underline">
                    <LinkIcon size={14} /> Site web
                  </a>
                )}
                {talent.linkedin && (
                  <a href={talent.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-navy/70 hover:text-navy hover:underline">
                    <LinkIcon size={14} /> LinkedIn
                  </a>
                )}
                {talent.github && (
                  <a href={talent.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-navy/70 hover:text-navy hover:underline">
                    <LinkIcon size={14} /> GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}