import { supabase } from "./Supabase";

export const NEWS_IMAGES_BUCKET = "news-images";

export function getNewsImagePath(imageUrl) {
  if (!imageUrl) return null;

  try {
    const url = new URL(imageUrl);
    const marker = `/storage/v1/object/public/${NEWS_IMAGES_BUCKET}/`;
    const index = url.pathname.indexOf(marker);
    if (index === -1) return null;

    return decodeURIComponent(url.pathname.slice(index + marker.length)) || null;
  } catch {
    return null;
  }
}

export async function deleteNewsImage(imageUrl) {
  const path = getNewsImagePath(imageUrl);
  if (!path) return { error: null };

  return supabase.storage.from(NEWS_IMAGES_BUCKET).remove([path]);
}

export async function fetchNews() {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    return error ? [] : data ?? [];
  } catch {
    return [];
  }
}
