import { ReactNode } from "react";

export type FlexProps = {
  children: ReactNode;
  as?: string;

  $flex?: number;
  $flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  $direction?: "row" | "column";
  $align?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
  $justify?: "center" | "start" | "flex-end" | "space-between";
  $gap?: number;
  $rowGap?: number;
  $columnGap?: number;

  $width?: string;
  $height?: string;
  $padding?: string;
  $marginBottom?: number;
  $marginLeft?: number;
  $borderRadius?: string;
};
