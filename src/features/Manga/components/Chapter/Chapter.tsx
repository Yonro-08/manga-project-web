import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

import ChapterStyle from "./ChapterStyle";
import { HeartOutlineIcon } from "icons";
import { ChapterProps } from "types/manga";

interface ChapterPropsHere {
  chapter: ChapterProps;
  endpoint: string | undefined;
}

const Chapter = ({ chapter, endpoint }: ChapterPropsHere) => {
  const theme = useTheme();
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
    <ChapterStyle onClick={handleClick}>
      <div className="ChapterTom">1</div>
      <div className="ChapterNumber">Глава {chapter?.chapterNum}</div>
      {/* <div className="ChapterAuthor">Ханами</div> */}
      <div className="ChapterDate">{date}</div>
      <div className="ChapterLikes">
        <HeartOutlineIcon
          width="20px"
          height="20px"
          fill="transparent"
          stroke={theme.colors.warning.slice(0, -1)}
        />
        <p>0</p>
      </div>
    </ChapterStyle>
  );
};

export default Chapter;
