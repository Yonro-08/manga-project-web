import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  to: string;
  $mW?: string;
  $width?: string;
  $height?: string;
  $padding?: string;
  $bg?: string;
  $borderRadius?: string;
};

export default LinkProps;
