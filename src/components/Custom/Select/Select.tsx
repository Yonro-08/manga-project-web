import { FC, ReactNode } from "react";
import styled from "styled-components";

type SelectProps = {
  children: ReactNode;
};

const SelectStyle = styled.select<SelectProps>`
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: none;
  outline: none;

  option {
    position: absolute;
    top: 100%;
    background-color: ${({ theme }) => theme.colors.bgPaper};
  }
`;

const SelectCustom: FC<SelectProps> = (props) => {
  return <div></div>;
};

export default SelectCustom;
