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
    background-color: ${({ theme }) => theme.colors.bgPaper};
  }
`;

const Select: FC<SelectProps> = (props) => {
  return <SelectStyle {...props} />;
};

export default Select;
