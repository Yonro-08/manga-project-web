import { FC } from "react";

import { FlexProps } from "./types";
import { FlexStyle } from "./FlexStyle";

const Flex: FC<FlexProps> = (props) => {
  return <FlexStyle {...props} />;
};

export default Flex;
