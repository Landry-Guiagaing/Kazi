"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { updateProfile } from "@/actions/profile";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

type EditProfileFormProps = {
  user: {
    name: string | null;
    bio: string | null;
    image: string | null;
  };
};

export function EditProfileForm({ user }: EditProfileFormProps) {
  const t = useTranslations("EditProfile");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(user.image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    if (imagePreview) {
      formData.set("image", imagePreview);
    }

    const result = await updateProfile(formData);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      // Redirection immédiate vers le dashboard en cas de succès
      router.push("/dashboard");
      router.refresh(); // On rafraîchit pour que le dashboard affiche les nouvelles données
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="relative h-24 w-24 overflow-hidden rounded-full bg-beige">
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Profile"
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-heading text-2xl font-semibold text-navy">
              {user.name?.charAt(0).toUpperCase() || "?"}
            </div>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy">
            {t("image")}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-muted file:mr-4 file:rounded-md file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-medium file:text-cream hover:file:bg-navy/90"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-navy" htmlFor="name">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={user.name || ""}
          className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-navy" htmlFor="bio">
          {t("bio")}
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          defaultValue={user.bio || ""}
          className="w-full rounded-md border border-navy/20 p-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <Button type="submit" disabled={isLoading} className="mt-4 w-full sm:w-auto">
        {isLoading ? "..." : t("save")}
      </Button>
    </form>
  );
}