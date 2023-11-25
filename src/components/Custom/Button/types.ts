import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  $padding?: string;
  $bg?: string;
  $color?: string;
  border?: string;
  $borderRadius?: string;
  $fillHover?: string;
};
