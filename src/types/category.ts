export type CategoryIcon = "code" | "palette" | "camera" | "video";

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: CategoryIcon;
};