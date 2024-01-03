import { Link } from "react-router-dom";

import c from "./ChapterButton.module.scss";

interface ChapterButtonProps {
  to: string;
  dataPosition: "left" | "right";
}

const ChapterButton = ({ to, dataPosition }: ChapterButtonProps) => {
  return (
    <div className={c.container} data-position={dataPosition}>
      <Link to={to} />
    </div>
  );
};

export default ChapterButton;
