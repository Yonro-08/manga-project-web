import { useEffect, useState } from "react";

import { ChapterHeader, ChapterImage, ChapterSetting } from "features/Chapter";

import c from "./ChapterPage.module.scss";

const ChapterPage = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [isHiding, setIsHiding] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setIsHiding(prevScrollPos < currentScrollPos && currentScrollPos > 56);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, isHiding]);

	const handleClick = () => setIsHiding((prev) => !prev);

	return (
		<>
			<ChapterHeader isHiding={isHiding} />
			<section className={c.chapter}>
				<div className="container" data-chapter>
					<div className={c.container} onClick={handleClick}>
						<ChapterImage />
					</div>
				</div>
			</section>
			<ChapterSetting />
		</>
	);
};

export default ChapterPage;
