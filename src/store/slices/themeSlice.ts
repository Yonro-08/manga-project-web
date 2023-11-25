import { createSlice } from "@reduxjs/toolkit";
import { darkTheme } from "../../theme";

const initialState = {
  theme: darkTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
