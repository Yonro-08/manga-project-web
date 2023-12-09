import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;

  $width?: string;
  $height?: string;
  $padding?: string;
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: string;

  $fillHover?: string;
};
