import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { EditProfileForm } from "@/components/sections/EditProfileForm";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export default async function TalentProfileEditPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { talentProfile: true },
  });

  if (!user) redirect("/login");

  const profileData = {
    name: user.name,
    image: user.image,
    role: user.role,
    bio: user.talentProfile?.bio || null,
    title: user.talentProfile?.title || null,
    companyName: null,
    description: null,
    interests: null,
  };

  return (
    <div className="space-y-6">
      <Link href="/dashboard/talent/profile" className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-navy transition-colors">
        <ArrowLeft size={16} />
        Retour au profil
      </Link>
      <div>
        <h1 className="font-heading text-3xl font-semibold text-navy">Éditer mon profil</h1>
      </div>
      <div className="rounded-xl border border-navy/5 bg-white p-8 shadow-sm">
        <EditProfileForm user={profileData} />
      </div>
    </div>
  );
}