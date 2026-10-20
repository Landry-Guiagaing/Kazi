import { useTranslations } from "next-intl";
import { LoginForm } from "@/components/sections/LoginForm";
import { Link } from "@/i18n/routing";

export default function LoginPage() {
  const t = useTranslations("LoginPage");

  return (
    <div className="flex w-full flex-col items-center px-4">
      <LoginForm />
      <div className="mt-6 text-center text-sm text-muted">
        {t("noAccount")}{" "}
        <Link href="/register" className="font-medium text-navy hover:underline">
          {t("registerLink")}
        </Link>
      </div>
    </div>
  );
}