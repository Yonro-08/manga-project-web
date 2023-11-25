import { FC } from "react";

import { HeaderListProps } from "./type";
import HeaderListStyle from "./HeaderListStyle";

const HeaderList: FC<HeaderListProps> = (props) => {
  return <HeaderListStyle {...props} />;
};

export default HeaderList;
