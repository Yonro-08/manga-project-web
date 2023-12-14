import styled from "styled-components";

export const ChapterHeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 56px;
  background: ${({ theme }) => theme.colors.bgPaper};
  z-index: 9;
`;
