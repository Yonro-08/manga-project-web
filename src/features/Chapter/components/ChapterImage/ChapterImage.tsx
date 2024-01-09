import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import {
	handleTransitionPagesNext,
	handleTransitionPagesPrev,
} from "features/Chapter";
import useFetchManga from "hooks/query/useFetchManga";
import { useManga } from "hooks/zustand/useManga";
import ChapterButton from "../ChapterButton/ChapterButton";

import c from "./ChapterImage.module.scss";

interface ChapterImageProps {}

function ChapterImage({}: ChapterImageProps) {
	const { endpoint } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const pageQuery = Number(searchParams.get("page")) || 0;
	const chapterQuery = Number(searchParams.get("chapter")) || 0;
	const [image, setImage] = useState("");

	const { getManga } = useManga();
	const { data, isLoading } = useFetchManga(endpoint);

	useEffect(() => {
		getManga(data);
	}, [isLoading]);

	const chapter = data?.chapters.find(
		(chapter) => chapter.chapterNum === chapterQuery
	);

	useEffect(() => {
		setImage("");
		(async () => {
			if (!chapter) return;
			const response = await fetch(chapter?.chapterImage[pageQuery - 1]);
			setImage(response.url);
		})();
	}, [pageQuery, chapter]);

	const handleTransitionPagesNextMemoized = useMemo(() => {
		if (!data || !chapter) return;

		return handleTransitionPagesNext(
			pageQuery,
			chapterQuery,
			endpoint,
			data,
			chapter
		);
	}, [pageQuery, chapterQuery, setImage, image]);

	return (
		<div className={c.chapterImage}>
			{!isLoading && chapter && data && (
				<>
					{!(
						chapterQuery === data?.chapters[0].chapterNum && pageQuery === 1
					) && (
						<ChapterButton
							to={handleTransitionPagesPrev(pageQuery, chapterQuery, endpoint)}
							dataPosition="left"
						/>
					)}
					<img className={c.image} src={image} alt="" />
					<ChapterButton
						to={handleTransitionPagesNextMemoized || ""}
						dataPosition="right"
					/>
				</>
			)}
		</div>
	);
}

export default ChapterImage;
