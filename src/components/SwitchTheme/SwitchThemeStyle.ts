import styled from "styled-components";

const SwitchThemeStyle = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  background-color: black;
  border-radius: 1rem;
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  span {
    position: absolute;
    top: 0.5px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: inherit;
    height: inherit;
    transition: 0.4s;
    cursor: pointer;
  }
  span::before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    top: 1.5px;
    right: 2px;
    background-color: gray;
    transition: 0.4s;
    border-radius: 1rem;
  }

  input:checked + span::before {
    transform: translateX(-19px);
    background-color: white;
  }
  svg {
    width: 14px;
    height: 14px;
  }
`;

export default SwitchThemeStyle;
