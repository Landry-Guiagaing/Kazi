import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Eye, Award, Briefcase, Bell } from "lucide-react";

export default async function TalentOverviewPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      talentProfile: {
        include: {
          skills: true,
          collaborations: true,
        },
      },
    },
  });

  if (!user) redirect("/login");

  const tTalent = await getTranslations("TalentDashboard");

  const profile = user.talentProfile;
  const isProfileIncomplete = !profile?.title || !profile?.bio;
  const skillsCount = profile?.skills.length || 0;
  const pendingCollaborations = profile?.collaborations.filter(c => c.status === "PENDING").length || 0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-semibold text-navy">
          {tTalent("welcome")}, {user.name?.split(" ")[0]}
        </h1>
        <p className="mt-2 text-muted">{tTalent("subtitle")}</p>
      </div>

      {isProfileIncomplete && (
        <div className="rounded-xl border border-champagne/30 bg-champagne/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy">{tTalent("incompleteTitle")}</h2>
            <p className="text-sm text-navy/70 mt-1">{tTalent("incompleteDesc")}</p>
          </div>
          <Link href="/dashboard/talent/profile/edit" className="shrink-0">
            <Button variant="primary" size="md">
              {tTalent("completeProfile")}
            </Button>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-navy/5 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-navy/60 mb-2">
            <Eye size={20} />
            <h3 className="font-medium text-navy">{tTalent("profileViews")}</h3>
          </div>
          <p className="text-3xl font-heading font-semibold text-navy">0</p>
          <p className="text-xs text-muted mt-2">{tTalent("profileViewsDesc")}</p>
        </div>

        <div className="rounded-xl border border-navy/5 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-navy/60 mb-2">
            <Award size={20} />
            <h3 className="font-medium text-navy">{tTalent("skills")}</h3>
          </div>
          <p className="text-3xl font-heading font-semibold text-navy">{skillsCount}</p>
          <p className="text-xs text-muted mt-2">{tTalent("skillsDesc")}</p>
        </div>

        <div className="rounded-xl border border-navy/5 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-navy/60 mb-2">
            <Briefcase size={20} />
            <h3 className="font-medium text-navy">{tTalent("collaborations")}</h3>
          </div>
          <p className="text-3xl font-heading font-semibold text-navy">{pendingCollaborations}</p>
          <p className="text-xs text-muted mt-2">{tTalent("collaborationsDesc")}</p>
        </div>
      </div>

      <div className="rounded-xl border border-navy/5 bg-white shadow-sm overflow-hidden">
        <div className="p-6 border-b border-navy/5">
          <h2 className="font-heading text-xl font-semibold text-navy">{tTalent("recentActivity")}</h2>
        </div>
        <ul className="divide-y divide-navy/5">
          <li className="p-6 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beige text-navy">
              <Bell size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-navy">{tTalent("welcomeActivity")}</p>
              <p className="text-sm text-muted mt-1">{tTalent("welcomeActivityDesc")}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}