import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ChapterProps } from "types/Manga";

import c from "./DropDown.module.scss";

const DropDown = ({ options }: { options: ChapterProps[] }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const chapterQuery = Number(searchParams.get("chapter"));
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleClick = () => {
		setIsActive((prev) => !prev);
	};

	return (
		<div className={c.dropdown} onClick={handleClick}>
			<div className={c.list}>
				{options[chapterQuery - 1]?.chapterTom} - {chapterQuery}
			</div>
			<div className={c.burger} data-active={isActive}>
				{options.map((option, index) => (
					<p
						key={index}
						data-active={option.chapterNum === chapterQuery}
						onClick={() => {
							setSearchParams({
								chapter: String(option?.chapterNum),
								page: "1",
							});
						}}
					>
						{option?.chapterNum}
					</p>
				))}
			</div>
		</div>
	);
};

export default DropDown;
