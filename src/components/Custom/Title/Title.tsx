import { FC } from "react";

import { TitleProps } from "./types";
import TitleStyle from "./TitleStyle";

const Title: FC<TitleProps> = (props) => {
  return <TitleStyle {...props} />;
};

export default Title;
