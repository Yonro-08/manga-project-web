import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import {
	ChapterButton,
	handleTransitionPagesNext,
	handleTransitionPagesPrev,
} from "features/Chapter";
import ChapterHeader from "features/Chapter/components/ChapterHeader/ChapterHeader";

import useFetchManga from "hooks/query/useFetchManga";
import { useManga } from "hooks/zustand/useManga";

import c from "./ChapterPage.module.scss";

const ChapterPage = () => {
	const { endpoint } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const [image, setImage] = useState<string>("");
	const pageQuery = Number(searchParams.get("page")) || 0;
	const chapterQuery = Number(searchParams.get("chapter")) || 0;

	const { getManga } = useManga();
	const { data, isLoading } = useFetchManga(endpoint);

	useEffect(() => {
		getManga(data);
	}, [isLoading]);

	const chapter = data?.chapters.filter(
		(chapter) => chapter.chapterNum === chapterQuery
	)[0];

	useEffect(() => {
		(async () => {
			if (!chapter) return;
			setImage("");
			const response = await fetch(chapter?.chapterImage[pageQuery - 1]);
			setImage(response.url);
		})();
	}, [pageQuery, chapter]);

	return (
		<>
			<ChapterHeader />
			<section className={c.chapter}>
				<div className="container" data-chapter>
					<div className={c.container}>
						{!isLoading && chapter && (
							<>
								{!(
									chapterQuery === data?.chapters[0].chapterNum &&
									pageQuery === 1
								) && (
									<ChapterButton
										to={handleTransitionPagesPrev(
											pageQuery,
											chapterQuery,
											endpoint
										)}
										dataPosition="left"
									/>
								)}
								<img className={c.image} src={image} alt="" />
								<ChapterButton
									to={handleTransitionPagesNext(
										pageQuery,
										chapterQuery,
										endpoint,
										data,
										chapter
									)}
									dataPosition="right"
								/>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default ChapterPage;
