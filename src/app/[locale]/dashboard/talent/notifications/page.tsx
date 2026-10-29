import { getTranslations } from "next-intl/server";

export default async function TalentNotificationsPage() {
  const t = await getTranslations("Dashboard");
  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold text-navy">{t("notifications")}</h1>
      <p className="mt-4 text-muted">Cette section est en cours de construction.</p>
    </div>
  );
}