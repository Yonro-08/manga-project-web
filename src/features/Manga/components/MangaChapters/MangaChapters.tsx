import Chapter from "../Chapter";

import { ChapterProps } from "types/Manga";

import c from "./MangaChapters.module.scss";

const MangaChapters = ({
	chapters,
	endpoint,
}: {
	chapters: ChapterProps[] | undefined;
	endpoint: string | undefined;
}) => {
	return (
		<div className={c.container}>
			{chapters &&
				chapters.map((chapter, index) => {
					return <Chapter key={index} chapter={chapter} endpoint={endpoint} />;
				})}
		</div>
	);
};

export default MangaChapters;
