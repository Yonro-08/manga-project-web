import { ArrowDown } from "icons";
import { useState, useEffect, useRef } from "react";

import c from "./DropDown.module.scss";

const DropDown = ({ value, options }: { value: string; options: string[] }) => {
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
    <div className={c.container} ref={ref} onClick={handleLocationBox}>
      <p className={c.title}>{value}</p>
      <ArrowDown />
      <div
        className={c.burger}
        ref={refBurger}
        data-active={isActive}
        data-location={locationBox}
      >
        {options.map((option, index) => (
          <p className={c.burgerText} key={index}>
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
