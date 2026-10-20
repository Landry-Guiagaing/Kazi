import { useTranslations } from "next-intl";
import { RegisterForm } from "@/components/sections/RegisterForm";
import { Link } from "@/i18n/routing";

export default function RegisterPage() {
  const t = useTranslations("RegisterPage");

  return (
    <div className="flex w-full flex-col items-center px-4">
      <RegisterForm />
      <div className="mt-6 text-center text-sm text-muted">
        {t("alreadyHaveAccount")}{" "}
        <Link href="/login" className="font-medium text-navy hover:underline">
          {t("loginLink")}
        </Link>
      </div>
    </div>
  );
}