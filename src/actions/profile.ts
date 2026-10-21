"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Non autorisé" };
  }

  const name = formData.get("name") as string;
  const bio = formData.get("bio") as string;
  const image = formData.get("image") as string; // L'image en Base64

  if (!name) {
    return { error: "Le nom est obligatoire." };
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        bio,
        // On ne met à jour l'image que si une nouvelle a été fournie
        ...(image && { image }),
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/edit-profile");
    return { success: true };
  } catch {
    // On retire le "(error)" pour satisfaire ESLint
    return { error: "Erreur lors de la mise à jour." };
  }
}