"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { updateProfile } from "@/actions/profile";
import { Button } from "@/components/ui/Button";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { X, Plus } from "lucide-react";
import Image from "next/image";

type EditProfileFormProps = {
  user: {
    name: string | null;
    image: string | null;
    bio?: string | null;
    title?: string | null;
    location?: string | null;
    website?: string | null;
    linkedin?: string | null;
    github?: string | null;
    skills?: { id: string; name: string }[];
    portfolio?: { id: string; title: string; url: string | null; images: string | null }[];
  };
};

export function EditProfileForm({ user }: EditProfileFormProps) {
  const t = useTranslations("EditProfile");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [image, setImage] = useState<string | null>(user.image);
  const [skills, setSkills] = useState<string[]>(user.skills?.map(s => s.name) || []);
  const [newSkill, setNewSkill] = useState("");

  const [portfolio, setPortfolio] = useState<{ title: string; url: string; images: string[] }[]>(
    user.portfolio?.map(p => ({ 
      title: p.title, 
      url: p.url || "", 
      images: p.images ? JSON.parse(p.images) : [] 
    })) || []
  );
  const [newProject, setNewProject] = useState({ title: "", url: "", images: [] as string[] });

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleAddProjectImage = (base64: string | null) => {
    if (base64) {
      setNewProject({ ...newProject, images: [...newProject.images, base64] });
    }
  };

  const removeNewProjectImage = (index: number) => {
    setNewProject({ ...newProject, images: newProject.images.filter((_, i) => i !== index) });
  };

  const addProject = () => {
    if (newProject.title.trim()) {
      setPortfolio([...portfolio, newProject]);
      setNewProject({ title: "", url: "", images: [] });
    }
  };

  const removeProject = (index: number) => {
    setPortfolio(portfolio.filter((_, i) => i !== index));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    if (image) formData.set("image", image);
    formData.set("skills", JSON.stringify(skills));
    formData.set("portfolio", JSON.stringify(portfolio));
    
    const fullLocation = [country, region, city, district].filter(Boolean).join(", ");
    formData.set("location", fullLocation);

    const result = await updateProfile(formData);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      router.push("/dashboard/talent/profile");
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {error && <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</div>}

      <ImageUpload value={image} onChange={setImage} label={t("image")} userName={user.name} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-navy" htmlFor="name">{t("name")}</label>
          <input id="name" name="name" type="text" required defaultValue={user.name || ""} className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy" htmlFor="jobTitle">{t("jobTitle")}</label>
          <input id="jobTitle" name="jobTitle" type="text" defaultValue={user.title || ""} className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-navy" htmlFor="bio">{t("bio")}</label>
        <textarea id="bio" name="bio" rows={4} defaultValue={user.bio || ""} className="w-full rounded-md border border-navy/20 p-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
      </div>

      {/* Localisation */}
      <div className="border-t border-navy/10 pt-6">
        <h3 className="mb-4 text-lg font-semibold text-navy">{t("location")}</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="country">{t("country")}</label>
            <input id="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Cameroun" className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="region">{t("region")}</label>
            <input id="region" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Centre" className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="city">{t("city")}</label>
            <input id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Yaoundé" className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="district">{t("district")}</label>
            <input id="district" value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="Bastos" className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
        </div>
      </div>

      {/* Liens */}
      <div className="border-t border-navy/10 pt-6">
        <h3 className="mb-4 text-lg font-semibold text-navy">{t("links")}</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="website">{t("website")}</label>
            <input id="website" name="website" type="url" defaultValue={user.website || ""} className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="linkedin">LinkedIn</label>
            <input id="linkedin" name="linkedin" type="url" defaultValue={user.linkedin || ""} className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="github">GitHub</label>
            <input id="github" name="github" type="url" defaultValue={user.github || ""} className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="border-t border-navy/10 pt-6">
        <h3 className="mb-4 text-lg font-semibold text-navy">{t("skills")}</h3>
        <div className="flex gap-2 mb-4">
          <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder={t("skillPlaceholder")} className="h-11 flex-1 rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} />
          <Button type="button" onClick={addSkill} variant="secondary" size="md">{t("addSkill")}</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-sm font-medium text-navy">
              {skill}
              <button type="button" onClick={() => removeSkill(skill)} className="text-navy/50 hover:text-red-500"><X size={14} /></button>
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="border-t border-navy/10 pt-6">
        <h3 className="mb-4 text-lg font-semibold text-navy">{t("portfolio")}</h3>
        
        <div className="rounded-xl border border-navy/10 p-6 mb-6 space-y-4">
          <p className="text-sm font-medium text-navy/70 uppercase tracking-wider">{t("addProjectTitle")}</p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} placeholder={t("projectTitlePlaceholder")} className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
            <input type="url" value={newProject.url} onChange={(e) => setNewProject({ ...newProject, url: e.target.value })} placeholder={t("projectUrlPlaceholder")} className="h-11 w-full rounded-md border border-navy/20 px-3 text-navy focus:outline-none focus:ring-2 focus:ring-navy" />
          </div>
          
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">{t("projectImages")}</label>
            <div className="flex flex-wrap gap-4">
              {newProject.images.map((img, idx) => (
                <div key={idx} className="relative h-24 w-24 rounded-lg overflow-hidden border border-navy/10 group">
                  <Image src={img} alt="Project" fill className="object-cover" />
                  <button type="button" onClick={() => removeNewProjectImage(idx)} className="absolute top-1 right-1 bg-white rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={14} className="text-red-500" />
                  </button>
                </div>
              ))}
              <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-navy/20 hover:border-navy/40 hover:bg-navy/5 transition-colors">
                <Plus size={24} className="text-navy/40" />
                <span className="text-xs text-navy/60 mt-1">{t("addImages")}</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => handleAddProjectImage(reader.result as string);
                    reader.readAsDataURL(file);
                  }
                }} />
              </label>
            </div>
          </div>
          
          <Button type="button" onClick={addProject} variant="secondary" size="md" className="w-full sm:w-auto">{t("addProject")}</Button>
        </div>

        <ul className="space-y-3">
          {portfolio.map((p, index) => (
            <li key={index} className="flex flex-col gap-3 rounded-lg border border-navy/10 p-4 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-navy">{p.title}</p>
                  {p.url && <p className="text-xs text-muted truncate">{p.url}</p>}
                </div>
                <button type="button" onClick={() => removeProject(index)} className="text-muted hover:text-red-500"><X size={18} /></button>
              </div>
              {p.images.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="relative h-16 w-16 rounded-md overflow-hidden border border-navy/10">
                      <Image src={img} alt="Project" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit" disabled={isLoading} size="lg">
          {isLoading ? "..." : t("save")}
        </Button>
      </div>
    </form>
  );
}