import { PROJECTS } from "../data/ebc";
import { supabase } from "./Supabase";

export const PROJECT_IMAGES_BUCKET = "project-images";

export function getProjectImagePath(imageUrl) {
  if (!imageUrl) return null;

  try {
    const url = new URL(imageUrl);
    const marker = `/storage/v1/object/public/${PROJECT_IMAGES_BUCKET}/`;
    const index = url.pathname.indexOf(marker);
    if (index === -1) return null;

    const path = decodeURIComponent(url.pathname.slice(index + marker.length));
    return path || null;
  } catch {
    return null;
  }
}

export async function deleteProjectImage(imageUrl) {
  const path = getProjectImagePath(imageUrl);
  if (!path) return { error: null };

  return supabase.storage.from(PROJECT_IMAGES_BUCKET).remove([path]);
}

export async function fetchProjects() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data?.length) {
      return PROJECTS;
    }

    return data;
  } catch {
    return PROJECTS;
  }
}
