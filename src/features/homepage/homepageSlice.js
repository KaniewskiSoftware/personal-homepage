import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    darkMode: false,
    operationStatus: "pending",
  },
  reducers: {
    toggleDarkMode: (state) => {
        state.darkMode = !state.darkMode;
    },
  },
});

export const {
    toggleDarkMode,
} = homepageSlice.actions;

export default homepageSlice.reducer;