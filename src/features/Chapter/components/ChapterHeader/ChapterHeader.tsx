import { Link } from "react-router-dom";

import Logo from "components/Logo";
import HeaderNavRight from "components/HeaderNavRight";
import DropDown from "../DropDown";
import { ArrowLeft, ArrowRight } from "icons";
import { useManga } from "hooks/zustand/useManga";

import c from "./ChapterHeader.module.scss";

const ChapterHeader = () => {
  const { manga } = useManga();

  return (
    <header className={c.header}>
      <div className="container">
        <div className={c.container}>
          <div className={c.leftContent}>
            <Logo />
            <nav>
              <ul className="headerList">
                <li>
                  <Link
                    className="chapterTitle"
                    to={`/manga/${manga?.endpoint}`}
                  >
                    {manga?.title?.russianName}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <ul className={`${c.headerList} headerList`}>
            <li>
              <a>
                <ArrowLeft />
              </a>
            </li>
            {manga && <DropDown options={manga?.chapters} />}
            <li>
              <a>
                <ArrowRight />
              </a>
            </li>
          </ul>
          <HeaderNavRight />
        </div>
      </div>
    </header>
  );
};

export default ChapterHeader;
