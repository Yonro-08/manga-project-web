import { Link } from "react-router-dom";

import SwitchTheme from "components/SwitchTheme";
import { useModal } from "hooks/zustand/useModal";
import { SettingIcon } from "icons";

import c from "./HeaderNavRight.module.scss";

const HeaderNavRight = () => {
	const { openModal } = useModal();

	return (
		<div className={c.container}>
			<nav className={c.nav}>
				<ul className="headerList">
					<li>
						<Link to="manga/create">Закладки</Link>
					</li>
				</ul>
			</nav>
			<SwitchTheme />
			<button className={c.button}>
				<SettingIcon />
			</button>
			<button className={c.enterProfile} onClick={openModal}>
				Войти
			</button>
		</div>
	);
};

export default HeaderNavRight;
