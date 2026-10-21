import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { logoutUser } from "@/actions/auth";
import { Button } from "@/components/ui/Button";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const t = await getTranslations("Dashboard");

  return (
    <main className="bg-cream py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white p-8 shadow-md sm:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
                {t("welcome")}, {session.user.name}
              </h1>
              <p className="mt-2 text-muted">
                {session.user.email}
              </p>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xl font-semibold text-cream">
              {session.user.name?.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
            </div>
          </div>

          <div className="mt-8 border-t border-navy/10 pt-6">
            <p className="text-sm text-muted">
              {session.user.role === "COMPANY" ? t("roleCompany") : t("roleTalent")}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {session.user.role === "TALENT" && (
              <Link href="/talents">
                <Button variant="secondary" size="md">
                  {t("backToDirectory")}
                </Button>
              </Link>
            )}
            <form action={logoutUser}>
              <Button variant="ghost" size="md">
                {t("logout")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}