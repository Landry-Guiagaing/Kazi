import { RegisterForm } from "@/components/sections/RegisterForm";
import { Link } from "@/i18n/routing";

export default function RegisterPage() {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <RegisterForm />
      <div className="mt-6 text-center text-sm text-muted">
        Déjà un compte ?{" "}
        <Link href="/login" className="font-medium text-navy hover:underline">
          Se connecter
        </Link>
      </div>
    </div>
  );
}