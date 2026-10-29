import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Pencil, Briefcase, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export default async function TalentProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { 
      talentProfile: { 
        include: { skills: true, portfolio: true } 
      } 
    },
  });

  if (!user) redirect("/login");

  const tProfile = await getTranslations("ProfilePage");
  const profile = user.talentProfile;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-semibold text-navy">{tProfile("title")}</h1>
          <p className="mt-2 text-muted">{tProfile("subtitle")}</p>
        </div>
        <Link href="/dashboard/talent/profile/edit">
          <Button variant="primary" size="md" className="flex items-center gap-2">
            <Pencil size={16} />
            {tProfile("edit")}
          </Button>
        </Link>
      </div>

      <div className="rounded-xl border border-navy/5 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white bg-beige shadow-sm">
            {user.image ? (
              <Image src={user.image} alt={user.name || "Profile"} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-heading text-4xl font-semibold text-navy">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h2 className="font-heading text-2xl font-semibold text-navy">{user.name}</h2>
            <p className="text-lg font-medium text-navy/70 mt-1">
              {profile?.title || tProfile("noTitle")}
            </p>
            
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-muted">
              <span className="flex items-center gap-1">
                <Briefcase size={16} /> {tProfile("available")}
              </span>
            </div>

            <p className="text-muted mt-6 max-w-2xl leading-relaxed">
              {profile?.bio || tProfile("noBio")}
            </p>
          </div>
        </div>

        {/* Compétences */}
        <div className="mt-10 border-t border-navy/10 pt-8">
          <h3 className="text-sm font-semibold text-navy/50 uppercase tracking-wider mb-4">
            {tProfile("skills")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile?.skills && profile.skills.length > 0 ? (
              profile.skills.map((skill) => (
                <span key={skill.id} className="rounded-full bg-navy/5 px-4 py-2 text-sm font-medium text-navy">
                  {skill.name}
                </span>
              ))
            ) : (
              <p className="text-sm text-muted">{tProfile("noSkills")}</p>
            )}
          </div>
        </div>

        {/* Portfolio */}
        <div className="mt-8 border-t border-navy/10 pt-8">
          <h3 className="text-sm font-semibold text-navy/50 uppercase tracking-wider mb-4">
            {tProfile("portfolio")}
          </h3>
          {profile?.portfolio && profile.portfolio.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.portfolio.map((item) => (
                <li key={item.id} className="rounded-lg border border-navy/10 p-4">
                  <h4 className="font-medium text-navy">{item.title}</h4>
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-1 text-sm text-navy/70 hover:text-navy hover:underline">
                      <LinkIcon size={14} /> {tProfile("viewProject")}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">{tProfile("noPortfolio")}</p>
          )}
        </div>
      </div>
    </div>
  );
}