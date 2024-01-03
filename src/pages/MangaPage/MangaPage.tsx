import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { LeftContent, RightContent } from "features/Manga";

import useFetchManga from "hooks/query/useFetchManga";
import { useManga } from "hooks/zustand/useManga";

import c from "./MangaPage.module.scss";

const MangaPage = () => {
	const { endpoint } = useParams();
	const { getManga } = useManga();

	const { data, isLoading } = useFetchManga(endpoint || "");

	useEffect(() => {
		getManga(data);
	}, [isLoading]);

	return (
		<section className={c.manga}>
			<div className="container">
				{!isLoading && (
					<div className={c.container}>
						<LeftContent src={data?.url} />
						<RightContent />
					</div>
				)}
			</div>
		</section>
	);
};

export default MangaPage;
