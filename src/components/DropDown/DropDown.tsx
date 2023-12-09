import { Text } from "components/Custom";
import { ArrowDown } from "icons";
import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const DropDownStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

type Props = {
  $isActive?: boolean;
  $location?: boolean;
  $right?: string;
  $left?: string;
};

const BurgerStyle = styled.div<Props>`
  position: absolute;
  right: ${({ $right }) => $right};
  left: ${({ $left }) => $left};
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bgBurger};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: all 0.2s linear;
  pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  ${({ $location, $isActive }) => {
    if ($location) {
      const translate = $isActive ? "translateY(-5px)" : "translateY(30px)";
      return css`
        transform: ${translate};
        bottom: 100%;
      `;
    } else {
      const translate = $isActive ? "translateY(5px)" : "translateY(30px)";
      return css`
        transform: ${translate};
        top: 100%;
      `;
    }
  }}
`;

const DropDown = ({ options }: { options: string[] }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [locationBox, setLocationBox] = useState<boolean>(false);
  const ref = useRef<any>(null);
  const refBurger = useRef<any>(null);

  const handleClick = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target)) {
      setIsActive((prev) => !prev);
      return;
    }
    setIsActive(false);
  };

  const handleLocationBox = () => {
    // @ts-ignore
    const { bottom } = ref.current.getBoundingClientRect();
    const burgerHeight = refBurger.current.getBoundingClientRect().height;
    const distanceToBottom = window.innerHeight - bottom;

    if (distanceToBottom - burgerHeight > 0) {
      setLocationBox(false);
    } else {
      setLocationBox(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);

  return (
    <DropDownStyle ref={ref} onClick={handleLocationBox}>
      <Text $weight="600" size="12px">
        ДОБАВИТЬ В ЗАКЛАДКИ
      </Text>
      <ArrowDown width="20px" height="20px" />
      <BurgerStyle
        ref={refBurger}
        $isActive={isActive}
        $location={locationBox}
        $right="-4px"
      >
        {options.map((option, index) => (
          <Text key={index} $p="12px 16px">
            {option}
          </Text>
        ))}
      </BurgerStyle>
    </DropDownStyle>
  );
};

export default DropDown;
