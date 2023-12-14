import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { ChapterProps } from "types/manga";
import { Text } from "components/Custom";

const DropDownStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  .list::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 0px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s ease;
  }
  &:hover .list::before {
    height: 5px;
  }
`;

type Props = {
  $isActive?: boolean;
  $hover?: boolean;
  $right?: string;
  $left?: string;
};

const BurgerStyle = styled.div<Props>`
  position: absolute;
  right: ${({ $right }) => $right};
  left: 50%;
  top: 100%;
  min-width: 48px;
  max-height: 400px;
  padding: 16px 0;
  border-radius: 16px;
  background-color: #222223;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: all 0.2s linear;
  pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  transform: translateX(-50%);
  transform: ${({ $isActive }) =>
    $isActive ? "translate(-50%, 10px)" : "translate(-50%, 40px)"};
  p {
    padding: 12px 16px;
    color: white;
    transition: all 0.3s ease;
    &:hover {
      background: hsla(0, 0%, 55%, 0.1);
    }
  }
`;

const DropDown = ({ options }: { options: ChapterProps[] }) => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const chapterQuery = Number(searchParams.get("chapter"));
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <DropDownStyle onClick={handleClick}>
      <Text className="list" $fontSize="12px" $color="#bebaac">
        {chapterQuery}
      </Text>
      <BurgerStyle $isActive={isActive} $right="-4px">
        {options.map((option, index) => (
          <p
            key={index}
            style={{
              background:
                option.chapterNum === chapterQuery ? theme.colors.primary : "",
            }}
            onClick={() => {
              setSearchParams({
                chapter: String(option?.chapterNum),
                page: "1",
              });
            }}
          >
            {option?.chapterNum}
          </p>
        ))}
      </BurgerStyle>
    </DropDownStyle>
  );
};

export default DropDown;
