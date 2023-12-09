import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ChapterButtonProps {
  to: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;

  $left?: string;
  $right?: string;
  $cursor?: "pointer" | "default";
}

const ChapterButtonStyle = styled(Link)<ChapterButtonProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  opacity: 0;
  cursor: pointer;
`;

const ChapterButton: FC<ChapterButtonProps> = (props) => {
  return <ChapterButtonStyle {...props} />;
};

export default ChapterButton;
