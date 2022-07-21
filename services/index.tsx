import { Article, InstagramMedia } from "types/Sections";
import cached_instagramMedia from "public/cached/instagramMedia.json";

export const getArticles = async (): Promise<Article[]> => {
  const pageSize = 6;
  const username = "amruthpillai";
  const apiKey = process.env.DEV_COMMUNITY_API_KEY;

  if (!apiKey) return [];

  const url = `https://dev.to/api/articles?username=${username}&per_page=${pageSize}`;

  try {
    const res = await fetch(url, { headers: { "api-key": apiKey } });
    const data: Article[] = await res.json();

    return data;
  } catch {
    return [];
  }
};

export const getInstagramMedia = async (): Promise<InstagramMedia[]> => {
  const fields = ["id", "media_type", "media_url", "permalink"];
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) return cached_instagramMedia.data as InstagramMedia[];

  const url = `https://graph.instagram.com/me/media?fields=${fields.join(",")}&access_token=${accessToken}`;

  try {
    const res = await fetch(url);
    const { data } = (await res.json()) as { data: InstagramMedia[] };

    return data;
  } catch {
    return cached_instagramMedia.data as InstagramMedia[];
  }
};
