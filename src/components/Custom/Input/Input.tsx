import { FC } from "react";

import { InputProps, LabelProps } from "./types";
import { LabelStyle, InputStyle } from "./InputStyle";

export const Label: FC<LabelProps> = ({
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  return (
    <LabelStyle {...props}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </LabelStyle>
  );
};

export const Input: FC<InputProps> = (props) => {
  return <InputStyle {...props} />;
};
