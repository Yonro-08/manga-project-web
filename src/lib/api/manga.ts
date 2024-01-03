import axios from "lib/axios";
import { MangaListProps, MangaProps } from "types/manga";

export const getMangaList = async (): Promise<MangaListProps[]> => {
	const path = `/api/manga`;
	const result = await axios.get(path);
	return result.data;
};

export const getMangaByEndpoint = async (
	endpoint: string
): Promise<MangaProps> => {
	const path = `/api/manga/${endpoint}`;
	const result = await axios.get(path);
	return result.data;
};
