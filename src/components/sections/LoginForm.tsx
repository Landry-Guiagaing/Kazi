"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { loginUser } from "@/actions/auth";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm() {
  const t = useTranslations("LoginPage");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await loginUser(formData);

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md sm:p-10">
      <h1 className="mb-8 text-center font-heading text-3xl font-semibold text-navy">
        {t("title")}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-navy" htmlFor="email">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-navy" htmlFor="password">
            {t("password")}
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="h-11 w-full rounded-md border border-navy/20 px-3 pr-10 text-navy focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-navy"
              aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button type="submit" disabled={isLoading} className="mt-4">
          {isLoading ? "..." : t("submit")}
        </Button>
      </form>
    </div>
  );
}