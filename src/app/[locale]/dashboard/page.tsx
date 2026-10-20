import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream py-20">
      <div className="rounded-xl bg-white p-8 shadow-md sm:p-12 text-center">
        <h1 className="font-heading text-3xl font-semibold text-navy">
          Bienvenue, {session.user.name}
        </h1>
        <p className="mt-4 text-muted">
          Votre rôle : <strong>{session.user.role}</strong>
        </p>
      </div>
    </main>
  );
}