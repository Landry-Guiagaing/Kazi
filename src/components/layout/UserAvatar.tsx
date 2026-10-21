"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

type UserAvatarProps = {
  user: { id: string; name: string | null; image: string | null } | null;
};

export function UserAvatar({ user }: UserAvatarProps) {
  if (!user) {
    return (
      <Link href="/login">
        <Button variant="secondary" size="md">
          Connexion
        </Button>
      </Link>
    );
  }

  const initials = user.name
    ?.split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      href="/dashboard"
      className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-navy/10 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      aria-label="Mon profil"
    >
      {user.image ? (
        <Image
          src={user.image}
          alt={user.name || "Profil"}
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center bg-navy font-heading text-sm font-semibold text-cream">
          {initials || "?"}
        </span>
      )}
    </Link>
  );
}