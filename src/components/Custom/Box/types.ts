import { ReactNode, MouseEventHandler } from "react";

export type BoxProps = {
  children?: ReactNode;
  as?: string;
  onClick?: MouseEventHandler;
  className?: string;

  // position
  $position?: "relative" | "absolute" | "fixed" | "sticky";
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;

  // display
  $display?: "flex" | "block" | "grid" | "inline";

  // display flex
  $flex?: number | string;
  $flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  $direction?: "row" | "column";
  $align?: "flex-start" | "flex-end" | "center";
  $justify?: "start" | "center" | "space-between";
  $gap?: number;
  $rowGap?: number;
  $columnGap?: number;

  // other
  $width?: string;
  $height?: string;
  $marginTop?: number;
  $marginBottom?: number;
  $padding?: string;

  $background?: string;
  $border?: string;
  $borderBottom?: string;
  $borderRadius?: string;
  $filter?: string;
  $zIndex?: number;
  $cursor?: "pointer";
};
