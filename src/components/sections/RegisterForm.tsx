"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { registerUser } from "@/actions/auth";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Eye, EyeOff } from "lucide-react";


export function RegisterForm() {
  const t = useTranslations("RegisterPage");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("TALENT");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const roleOptions = [
    { value: "TALENT", label: t("roleTalent") },
    { value: "COMPANY", label: t("roleCompany") },
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.set("role", role);

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setIsLoading(false);
      return;
    }

    const result = await registerUser(formData);

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
          <label className="mb-1 block text-sm font-medium text-navy" htmlFor="name">
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

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
              minLength={6}
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

        <div>
          <label className="mb-1 block text-sm font-medium text-navy" htmlFor="confirmPassword">
            {t("confirmPassword")}
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              minLength={6}
              className="h-11 w-full rounded-md border border-navy/20 px-3 pr-10 text-navy focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-navy"
              aria-label={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-navy">
            {t("role")}
          </label>
          <Select
            options={roleOptions}
            value={role}
            onChange={setRole}
            ariaLabel={t("role")}
          />
        </div>

        <Button type="submit" disabled={isLoading} className="mt-4">
          {isLoading ? "..." : t("submit")}
        </Button>
      </form>
    </div>
  );
}