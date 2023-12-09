import { FC } from "react";

import { MangaRouteProps } from "./types";
import MangaRouteStyle from "./MangaRouteStyle";

const MangaRoute: FC<MangaRouteProps> = ({ children, ...props }) => {
  return <MangaRouteStyle {...props}>{children}</MangaRouteStyle>;
};

export default MangaRoute;
