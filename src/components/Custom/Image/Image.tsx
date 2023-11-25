import { FC } from "react";

import { ImageProps } from "./types";
import ImageStyle from "./ImageStyle";

const Image: FC<ImageProps> = (props) => {
  return <ImageStyle {...props} />;
};

export default Image;
