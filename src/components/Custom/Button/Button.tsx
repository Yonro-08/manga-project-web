import { FC } from "react";

import { ButtonProps } from "./types";
import ButtonStyle from "./ButtonStyle";

const Button: FC<ButtonProps> = (props) => {
  return <ButtonStyle {...props} />;
};

export default Button;
