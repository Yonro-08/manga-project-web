import { MouseEventHandler, ReactNode } from "react";

export type TextProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  $height?: string;
  $marginBottom?: number;
  $padding?: string;
  $color?: string;
  $fontSize?: string;
  $weight?: string;
  $bg?: string;
  $lineHeight?: string | number;
  letterSpacing?: string;
  $variant?: "fs16" | "fs12" | "mangaStats";
  $hover?: boolean;
  $textColumn?: number;
};
