import { ChangeEvent } from "react";

import SwitchThemeStyle from "./SwitchThemeStyle";
import { useThemeZustand } from "hooks/zustand/useThemeZustand";
import { MoonIcon, SunIcon } from "icons";

const SwitchTheme = () => {
  const { switchTheme, theme } = useThemeZustand();

  const handleSwitchTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      switchTheme("light");
      return;
    }
    switchTheme("dark");
  };

  return (
    <SwitchThemeStyle>
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleSwitchTheme}
      />
      <span>
        <MoonIcon />
        <SunIcon />
      </span>
    </SwitchThemeStyle>
  );
};

export default SwitchTheme;
