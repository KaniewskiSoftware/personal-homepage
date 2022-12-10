import { createSlice } from "@reduxjs/toolkit";
import { getIsDarkModeFromLocalStorage } from "./isDarkModeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: getIsDarkModeFromLocalStorage(),
  },
  reducers: {
    toggleIsDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleIsDarkMode } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectIsDarkMode = (state) => selectThemeState(state).isDarkMode;

export default themeSlice.reducer;
