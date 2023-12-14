import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ChapterButtonProps {
  to: string;
  $left?: string;
  $right?: string;
}

export const ChapterButtonStyle = styled.div<ChapterButtonProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  opacity: 0;
  cursor: pointer;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ChapterButton: FC<ChapterButtonProps> = (props) => {
  return (
    <ChapterButtonStyle {...props}>
      <Link to={props.to} />
    </ChapterButtonStyle>
  );
};

export default ChapterButton;
