import { FC } from "react";

import { ContainerProps } from "./types";
import { ContainerStyle } from "./ContainerStyle";

const Container: FC<ContainerProps> = (props) => {
  return <ContainerStyle {...props} />;
};

export default Container;
