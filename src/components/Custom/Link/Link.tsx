import { FC } from "react";

import LinkProps from "./types";
import LinkStyle from "./LinkStyle";

const Link: FC<LinkProps> = (props) => {
  return <LinkStyle {...props} />;
};

export default Link;
