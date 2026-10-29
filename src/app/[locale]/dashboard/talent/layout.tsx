import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { TalentSidebar } from "@/components/dashboard/TalentSidebar";

export default async function TalentLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  
  if (session.user.role !== "TALENT") redirect("/dashboard/company");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) redirect("/login");

  return (
    <div className="flex min-h-screen bg-beige">
      <TalentSidebar user={{ name: user.name, image: user.image }} />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
}