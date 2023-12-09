import axios from "lib/axios";
import { AllMangaProps, MangaProps } from "types/manga";

export const getManga = async (): Promise<AllMangaProps[]> => {
  const path = "/api/manga";
  const result = await axios.get(path);
  return result.data;
};

export const getMangaByEndpoint = async (
  endpoint: string | undefined
): Promise<MangaProps> => {
  const path = `/api/manga/${endpoint}`;
  const result = await axios.get(path);
  return result.data;
};
