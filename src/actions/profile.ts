"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return { error: "Non autorisé" };

  const name = formData.get("name") as string;
  const image = formData.get("image") as string;
  const bio = formData.get("bio") as string;
  const jobTitle = formData.get("jobTitle") as string;
  const location = formData.get("location") as string;
  const website = formData.get("website") as string;
  const linkedin = formData.get("linkedin") as string;
  const github = formData.get("github") as string;
  
  const skillsRaw = formData.get("skills") as string;
  const portfolioRaw = formData.get("portfolio") as string;
  
  const skills = skillsRaw ? JSON.parse(skillsRaw) : [];
  const portfolio = portfolioRaw ? JSON.parse(portfolioRaw) : [];

  if (!name) return { error: "Le nom est obligatoire." };

  try {
    await prisma.$transaction(async (tx) => {
      // 1. Mise à jour utilisateur
      await tx.user.update({
        where: { id: session.user.id },
        data: {
          name,
          image: image || undefined,
        }
      });

      // 2. Mise à jour ou création du profil talent
      const profile = await tx.talentProfile.upsert({
        where: { userId: session.user.id },
        update: { bio, title: jobTitle, location, website, linkedin, github },
        create: { 
          userId: session.user.id,
          bio, title: jobTitle, location, website, linkedin, github 
        }
      });

      // 3. Compétences (on supprime tout et on recrée)
      await tx.skill.deleteMany({ where: { profileId: profile.id } });
      if (skills.length > 0) {
        await tx.skill.createMany({
          data: skills.map((s: string) => ({ name: s, profileId: profile.id }))
        });
      }

      // 4. Portfolio (on supprime tout et on recrée)
      await tx.portfolioItem.deleteMany({ where: { profileId: profile.id } });
      if (portfolio.length > 0) {
        await tx.portfolioItem.createMany({
          data: portfolio.map((p: { title: string, url: string, images: string[] }) => ({
            title: p.title,
            url: p.url || null,
            images: p.images && p.images.length > 0 ? JSON.stringify(p.images) : null,
            profileId: profile.id
          }))
        });
      }
    });

    revalidatePath("/dashboard/talent/profile");
    return { success: true };
  } catch (error) {
    // Cela affichera l'erreur exacte dans ton terminal (npm run dev)
    console.error("ERREUR PRISMA:", error);
    return { error: "Erreur lors de la mise à jour." };
  }
}