import { LoginForm } from "@/components/sections/LoginForm";
import { Link } from "@/i18n/routing";

export default function LoginPage() {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <LoginForm />
      <div className="mt-6 text-center text-sm text-muted">
        Pas encore de compte ?{" "}
        <Link href="/register" className="font-medium text-navy hover:underline">
          S&apos;inscrire
        </Link>
      </div>
    </div>
  );
}