import { Link } from "react-router-dom";

import SwitchTheme from "components/SwitchTheme";
import { SettingIcon } from "icons";

import c from "./HeaderNavRight.module.scss";

const HeaderNavRight = () => {
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
      <button className={c.enterProfile}>Войти</button>
    </div>
  );
};

export default HeaderNavRight;
