import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  to: string;

  $padding?: string;
  $marginLeft?: number;
  $backgroundColor?: string;
  $size?: string;
  $lineHeight?: string;
  $borderRadius?: string;
};

export default LinkProps;
