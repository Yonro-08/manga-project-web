import { useNavigate } from "react-router-dom";

import { HeartOutlineIcon } from "icons";
import { ChapterProps } from "types/manga";

import c from "./Chapter.module.scss";

interface ChapterPropsHere {
  chapter: ChapterProps;
  endpoint: string | undefined;
}

const Chapter = ({ chapter, endpoint }: ChapterPropsHere) => {
  const navigate = useNavigate();

  const date = chapter?.createChapter
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");

  const handleClick = () => {
    navigate(
      `/manga/${endpoint}/chapters?chapter=${chapter?.chapterNum}&page=1`
    );
  };

  return (
    <div className={c.container} onClick={handleClick}>
      <div className={c.ChapterTom}>1</div>
      <div className={c.ChapterNumber}>Глава {chapter?.chapterNum}</div>
      {/* <div className={c.ChapterAuthor}>Ханами</div> */}
      <div className={c.ChapterDate}>{date}</div>
      <div className={c.ChapterLikes}>
        <HeartOutlineIcon />
        <p>0</p>
      </div>
    </div>
  );
};

export default Chapter;
