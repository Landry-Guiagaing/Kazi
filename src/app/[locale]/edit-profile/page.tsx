import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { EditProfileForm } from "@/components/sections/EditProfileForm";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function EditProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      talentProfile: true,
      companyProfile: true,
    },
  });

  if (!user) redirect("/login");

  const t = await getTranslations("EditProfile");

  // On prépare les données selon le rôle
  const profileData = user.role === "COMPANY" ? {
    name: user.name,
    image: user.image,
    role: user.role,
    companyName: user.companyProfile?.companyName || null,
    description: user.companyProfile?.description || null,
    interests: user.companyProfile?.interests || null,
    bio: null,
  } : {
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
    <main className="bg-cream py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
        >
          <ArrowLeft size={16} />
          {t("backToDashboard")}
        </Link>

        <div className="rounded-xl bg-white p-8 shadow-md sm:p-12">
          <h1 className="mb-8 font-heading text-3xl font-semibold text-navy sm:text-4xl">
            {t("title")}
          </h1>
          <EditProfileForm user={profileData} />
        </div>
      </div>
    </main>
  );
}