import { ReactNode } from "react";

export type TextProps = {
  children: ReactNode;
  $height?: string;
  $marginBottom?: number;
  $padding?: string;
  $color?: string;
  $fontSize?: string;
  $weight?: string;
  $lineHeight?: string | number;
  letterSpacing?: string;
  $variant?: "fs16" | "fs12" | "mangaStats";
  $hover?: boolean;
  $textColumn?: number;
};
