import styled from "styled-components";

import { InputProps, LabelProps } from "./types";

export const LabelStyle = styled.label<LabelProps>`
  display: flex;
  width: ${({ width }) => width || "437px"};
  padding: ${({ $padding }) => $padding || "12px 18px"};
  background-color: ${({ $bg }) => $bg || "#FAFCFC"};
  border: ${({ border }) => border || "1px solid #1F1F1F"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "10px"};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
`;

export const InputStyle = styled.input.attrs<InputProps>(
  ({ type, onChange, name }) => ({
    type,
    name,
    onChange,
  })
)`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${({ $bg }) => $bg || "#fafcfc"};
  padding: ${({ $padding }) => $padding};
`;
