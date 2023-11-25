import { FC } from "react";

import { BoxProps } from "./types";
import BoxStyle from "./BoxStyle";

const Box: FC<BoxProps> = (props) => {
  return <BoxStyle {...props} />;
};

export default Box;
