const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export type ApiTalent = {
  id: string;
  name: string;
  title: string | null;
  location: string | null;
  image: string | null;
};

export async function searchTalents(params?: {
  skill?: string;
  location?: string;
  title?: string;
}): Promise<ApiTalent[]> {
  const query = new URLSearchParams();
  if (params?.skill) query.append("skill", params.skill);
  if (params?.location) query.append("location", params.location);
  if (params?.title) query.append("title", params.title);

  const url = `${API_URL}/api/talents/search${query.toString() ? `?${query}` : ""}`;
  
  const res = await fetch(url, { cache: "no-store" });
  
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des talents");
  }
  
  return res.json();
}

export async function getTalentById(id: string): Promise<ApiTalent & { bio: string | null; skills: string[]; website: string | null; linkedin: string | null; github: string | null; email: string }> {
  const res = await fetch(`${API_URL}/api/talents/${id}`, { cache: "no-store" });
  
  if (!res.ok) {
    throw new Error("Talent non trouvé");
  }
  
  return res.json();
}