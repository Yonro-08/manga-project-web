import { FC } from "react";

import { TextProps } from "./types";
import TextStyle from "./TextStyle";

const Text: FC<TextProps> = (props) => {
  return <TextStyle {...props} />;
};

export default Text;
