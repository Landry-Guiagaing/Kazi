import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CompanySidebar } from "@/components/dashboard/CompanySidebar";

export default async function CompanyLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  
  if (session.user.role !== "COMPANY") redirect("/dashboard/talent");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { companyProfile: true },
  });

  if (!user) redirect("/login");

  return (
    <div className="flex min-h-screen bg-beige">
      <CompanySidebar 
        user={{ name: user.name, image: user.image }} 
        companyName={user.companyProfile?.companyName}
      />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
}