import Button from "components/Button";
import DropDown from "components/DropDown/DropDown";
import ArrowRight from "icons/ArrowRight";
import BookmarkMenu from "../BookmarkMenu";

import c from "./LeftContent.module.scss";

interface LeftContentProps {
	src: string | undefined;
}

const LeftContent = ({ src }: LeftContentProps) => {
	return (
		<div className={c.leftContent}>
			<div className={c.container}>
				<div className={c.image}>
					<img src={src} alt="" />
				</div>
				<div className={c.buttons}>
					<button className={c.link}>Читать</button>
					<DropDown
						classContainer={c.button}
						classBurger={c.burger}
						value={
							<Button>
								Добавить в закладки
								<ArrowRight />
							</Button>
						}
						burgerContent={<BookmarkMenu />}
						isBurgerOnTop
					/>
				</div>
			</div>
		</div>
	);
};

export default LeftContent;
