"use client";

import { logoutUser } from "@/actions/auth";
import { Button } from "@/components/ui/Button";
import { useRouter } from "@/i18n/routing";

export function LogoutButton({ label }: { label: string }) {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.push("/"); // Redirection Next.js
    router.refresh(); // Force le rafraîchissement des données serveur (vide le cache)
  };

  return (
    <Button variant="ghost" size="md" onClick={handleLogout}>
      {label}
    </Button>
  );
}