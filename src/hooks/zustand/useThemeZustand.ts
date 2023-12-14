import { create } from "zustand";

import { setLocalStorage, getLocalStorage } from "utils/localStorage";

interface useThemeProps {
  theme: string;
  switchTheme: (value: string) => void;
}

export const useThemeZustand = create<useThemeProps>((set) => ({
  theme: getLocalStorage("theme") || "dark",
  switchTheme: (value) =>
    set(() => {
      setLocalStorage("theme", value);
      return { theme: value };
    }),
}));
