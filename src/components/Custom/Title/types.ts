import { ReactNode } from "react";

export type TitleProps = {
  children: ReactNode;
  as?: string;
  $textColumn?: number;
  $paddingLeft?: string;
  $marginBottom?: string;
  $weight?: string;
  color?: string;
  size?: string;
  letterSpacing?: string;
  $textTransform?: string;
};
