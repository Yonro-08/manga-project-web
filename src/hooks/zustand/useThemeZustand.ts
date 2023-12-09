import { create } from "zustand";

import { setLocalStorage, getLocalStorage } from "utils/localStorage";

interface useThemeProps {
  theme: string;
  switchTheme: (value: string) => void;
}

export const useThemeZustand = create<useThemeProps>((set) => ({
  theme: getLocalStorage("theme") || "darkTheme",
  switchTheme: (value) =>
    set(() => {
      setLocalStorage("theme", value);
      return { theme: value };
    }),
}));
