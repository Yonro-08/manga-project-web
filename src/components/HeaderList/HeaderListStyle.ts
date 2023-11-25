import styled from "styled-components";

const HeaderListStyle = styled.ul`
  display: flex;
  height: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  list-style: none;
  text-transform: uppercase;

  li {
    display: flex;
    align-items: center;
    position: relative;
    position: relative;
    height: 100%;
    font-size: 12px;
    padding: 0px 12px;
    cursor: pointer;
  }
  li::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 0px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s ease;
  }
  li:hover::before {
    height: 5px;
  }
`;

export default HeaderListStyle;
