import { ReactNode, ChangeEventHandler } from "react";

export type InputProps = {
  type?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  $padding?: string;
  $bg?: string;
};

export type LabelProps = {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  width?: string;
  border?: string;
  $bg?: string;
  $borderRadius?: string;
  $padding?: string;
  $boxShadow?: string;
};
