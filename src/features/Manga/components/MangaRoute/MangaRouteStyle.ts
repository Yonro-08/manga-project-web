import styled, { css } from "styled-components";

import { MangaRouteProps } from "./types";

const MangaRouteStyle = styled.div<MangaRouteProps>`
  position: relative;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 38%;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  ${({ $active }) => {
    switch ($active) {
      case "about":
        return css`
          a:first-child {
            color: ${({ theme }) => theme.colors.primary};
          }
          &::before {
            left: 5%;
          }
        `;
      case "chapters":
        return css`
          a:last-child {
            color: ${({ theme }) => theme.colors.primary};
          }
          &::before {
            left: 55%;
          }
        `;

      default:
        break;
    }
  }}
`;

export default MangaRouteStyle;
