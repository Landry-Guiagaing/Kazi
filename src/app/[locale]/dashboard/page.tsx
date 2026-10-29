import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardRedirectPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  if (session.user.role === "COMPANY") {
    redirect("/dashboard/company");
  }

  redirect("/dashboard/talent");
}